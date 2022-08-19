export interface GCalAPIResponse {
  kind: string;
  timeMin: string;
  timeMax: string;
  calendars: { [key: string]: Calendar };
}

export interface Calendar {
  busy: Busy[];
}

export interface Busy {
  start: string;
  end: string;
}
