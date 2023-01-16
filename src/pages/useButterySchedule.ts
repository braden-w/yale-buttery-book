import { formatDistance } from 'date-fns';
import { ref, Ref } from 'vue';
import axios from 'axios';
import { Buttery, butteries } from '../shared/butteries';
import { GCalAPIResponse } from 'src/types/GCalAPIResponse';

export const gcalButterySchedule = ref<GCalAPIResponse>();

/*** List of butteries that are currently open */
export const OpenButteryCardList: Ref<Buttery[]> = ref([]);
/*** List of butteries that are currently closed */
export const ClosedButteryCardList: Ref<Buttery[]> = ref([]);

let scheduleSyncInterval: NodeJS.Timeout | null = null;
let calendarSyncInterval: NodeJS.Timeout | null = null;

/*** Fetch the Google Calendar schedule and save it into gcalButterySchedule */
async function refreshGcalButterySchedule() {
  const startRange = new Date(new Date().setDate(new Date().getDate() - 1));
  const endRange = new Date(new Date().setDate(new Date().getDate() + 30));
  const startRangeISO = startRange.toISOString();
  const endRangeISO = endRange.toISOString();
  const requestBody = {
    timeMin: startRangeISO,
    timeMax: endRangeISO,
    items: butteries.map((buttery) => ({
      id: buttery.calendarID,
    })),
  };
  const res = await axios({
    url: `https://www.googleapis.com/calendar/v3/freeBusy?key=${
      import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY
    }`,
    method: 'POST',
    data: requestBody,
  });
  gcalButterySchedule.value = res.data as GCalAPIResponse;
}

function updateTimeToOpenAndClose(buttery: Buttery) {
  const now = new Date();
  const butteryScheduleBusy =
    /* Creating a schedule for the buttery. */
    gcalButterySchedule.value?.calendars[buttery.calendarID].busy;
  if (!butteryScheduleBusy) {
    return;
  }
  let previousEventRange = {
    start: new Date(butteryScheduleBusy?.[0]?.start),
    end: new Date(butteryScheduleBusy?.[0]?.end),
  };
  for (const event of butteryScheduleBusy) {
    const eventRange = {
      start: new Date(event.start),
      end: new Date(event.end),
    };
    // If buttery is open
    if (eventRange.start <= now && eventRange.end >= now) {
      buttery.isOpen = true;
      const millisecondsToClose = eventRange.end.getTime() - now.getTime();
      const humanReadable = formatDistance(millisecondsToClose, 0, {
        addSuffix: true,
        includeSeconds: true,
      });

      buttery.opensIn = `Closes ${humanReadable}`;
    }
    // If buttery is closed
    if (eventRange.start >= now && previousEventRange.end <= now) {
      buttery.isOpen = false;
      const millisecondsToOpen = eventRange.start.getTime() - now.getTime();
      const humanReadable = formatDistance(millisecondsToOpen, 0, {
        addSuffix: true,
        includeSeconds: true,
      });

      buttery.opensIn = `Opens ${humanReadable}`;
    }
    previousEventRange = eventRange;
  }
}

function updateButteriesStatus(): void {
  for (const buttery of butteries) {
    updateTimeToOpenAndClose(buttery);
    if (buttery.isOpen) {
      OpenButteryCardList.value.push(buttery);
    } else {
      ClosedButteryCardList.value.push(buttery);
    }
  }
}

function clearButteryCardList() {
  OpenButteryCardList.value = [];
  ClosedButteryCardList.value = [];
}

export async function refresh(): Promise<void> {
  await refreshGcalButterySchedule();
  clearButteryCardList();
  updateButteriesStatus();
}

export function startSync() {
  // Stop sync if residual
  stopSync();
  console.log('starting sync');
  void refresh();

  // Refresh GCal schedule every minute
  calendarSyncInterval = setInterval(async () => {
    await refreshGcalButterySchedule();
  }, 60 * 1000);

  // Refresh open and closed butteries every second
  scheduleSyncInterval = setInterval(() => {
    clearButteryCardList();
    updateButteriesStatus();
  }, 1 * 1000);
  console.log('sync started', calendarSyncInterval, scheduleSyncInterval);
}

export function stopSync() {
  console.log(
    'stopping sync, current running interval timer :>>',
    calendarSyncInterval,
    scheduleSyncInterval
  );
  if (calendarSyncInterval) {
    clearInterval(calendarSyncInterval);
    calendarSyncInterval = null;
  }
  if (scheduleSyncInterval) {
    clearInterval(scheduleSyncInterval);
    scheduleSyncInterval = null;
  }
  console.log(
    'sync stopped, current running interval timers :>>',
    calendarSyncInterval,
    scheduleSyncInterval
  );
}
