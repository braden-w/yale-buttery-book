<template>
  <div
    :id="props.buttery?.calendarID"
    :style="`{height:${calendarHeight}}`"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, PropType } from 'vue';
import { Buttery, TimeRemaining, TimeUntil } from 'src/shared/types-butteries';

const props = defineProps({
  buttery: {
    type: Object as PropType<Buttery & Partial<TimeRemaining & TimeUntil>>,
    required: true
  }
});

// --- Begin Calendar Logic ---

import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';

let calendar: Calendar | null = null;
const calendarHeight = 300;

let refreshForRefetchEvents: NodeJS.Timeout | null = null;

function startRefresh() {
  refreshForRefetchEvents = setInterval(() => {
    if (calendar) {
      calendar.refetchEvents();
    }
  }, 10000);
}
function stopRefresh() {
  if (refreshForRefetchEvents) {
    clearInterval(refreshForRefetchEvents);
  }
}

function renderCalendar() {
  const calendarEl = document.getElementById(props.buttery?.calendarID);
  if (calendarEl) {
    calendar = new Calendar(calendarEl, {
      plugins: [timeGridPlugin, googleCalendarPlugin],
      height: calendarHeight,
      initialView: 'timeGrid3Day',
      headerToolbar: {
        start: 'prev,next',
        center: '', //'title',
        end: 'timeGridDay,timeGrid3Day,timeGridWeek'
      },
      scrollTime: props.buttery?.startTime,
      views: {
        timeGrid3Day: {
          type: 'timeGrid',
          duration: { days: 3 },
          buttonText: '3 day'
        }
      },
      googleCalendarApiKey: 'import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY',
      events: {
        googleCalendarId: props.buttery.calendarID
      }
    });
    calendar.render();
    startRefresh();
  }
}

function destroyCalendar() {
  if (calendar) {
    calendar.destroy();
    stopRefresh();
    calendar = null;
  }
}
onMounted(() => {
  renderCalendar();
});
onBeforeUnmount(() => {
  destroyCalendar();
});
</script>
