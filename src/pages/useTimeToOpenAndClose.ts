import { Buttery, TimeRemaining, TimeUntil } from 'src/shared/butteries';
import { butterySchedule } from './useButterySchedule';

const ERROR = null;
/*** Function that adds much time is left until buttery opens */
export function addTimeToOpen<T>(
  buttery: Buttery & T
): Buttery & T & TimeUntil {
  const now = new Date();
  const butteryScheduleBusy =
    butterySchedule.value?.calendars[buttery.calendarID].busy;
  if (!butteryScheduleBusy) {
    return { ...buttery, timeUntil: ERROR };
  }
  for (const event of butteryScheduleBusy) {
    const start = new Date(event.start);
    const timeUntil = start.getTime() - now.getTime();
    if (timeUntil > 0) {
      return { ...buttery, timeUntil };
    }
  }
  return { ...buttery, timeUntil: ERROR };
}
/*** Function that adds much time is left until buttery closes */
export function addTimeToClose<T>(
  buttery: Buttery & T
): Buttery & T & TimeRemaining {
  const now = new Date();
  const butteryScheduleBusy =
    butterySchedule.value?.calendars[buttery.calendarID].busy;
  if (!butteryScheduleBusy) {
    return { ...buttery, timeRemaining: ERROR };
  }
  for (const event of butteryScheduleBusy) {
    const end = new Date(event.end);
    const timeRemaining = end.getTime() - now.getTime();
    if (timeRemaining > 0) {
      return { ...buttery, timeRemaining };
    }
  }
  return { ...buttery, timeRemaining: ERROR };
}
