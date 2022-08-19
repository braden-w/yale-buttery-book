export interface Buttery {
  name: string;
  calendarID: string;
  /*** Unique key that we'll use to identify this buttery */
  nickname: string;
  pictureUrl: string;
  recommend: string;
  textTime: string;
  /*** The daily start time represented in 00:00:00 format. This is used to focus the calendar view on the appropriate time of day without scrolling for each buttery. */
  startTime: string;
  isOpen?: boolean;
  opensIn?: string;
}

export type TimeUntil = {
  timeUntil: number | null;
};

export type TimeRemaining = {
  timeRemaining: number | null;
};
