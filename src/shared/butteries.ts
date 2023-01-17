const cachedButteries = [
  {
    name: 'Benjamin Franklin',
    calendarID: 'c_qh7c9stu3qr3hh7nj68gvc12nc@group.calendar.google.com',
    nickname: "Ben's Butt",
    pictureUrl: 'BenjaminFranklin',
    recommend: 'Vegan Quesadilla, Fries',
    textTime: '10 PM - 1 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Berkeley',
    calendarID: 'c_18ghppn0o4coealtrqf4m876jo@group.calendar.google.com',
    nickname: "Marvin's",
    pictureUrl: 'Berkeley',
    recommend: 'BK Special, Pancakes, Nutellawich',
    textTime: '10 PM - 1 AM | Sun-Fri',
    startTime: '22:00:00',
  },
  {
    name: 'Branford',
    calendarID: 'c_0vl82r4qhr2sshm97s843g9ju8@group.calendar.google.com',
    nickname: 'The Nuttery',
    pictureUrl: 'Branford',
    recommend: 'The Chin, Circle of Life, Mario Melt',
    textTime: '10:30 PM - 12:45 AM | Sun-Fri',
    startTime: '22:30:00',
  },
  {
    name: 'Davenport',
    calendarID: 'c_ljjasqrqmi61clcb7q8grhmh5o@group.calendar.google.com',
    nickname: 'The Dive',
    pictureUrl: 'Davenport',
    recommend: 'RJR, BBQQ, Goldilocks Waffles',
    textTime: '10 PM - 12:30 AM | Daily',
    startTime: '22:00:00',
  },
  {
    name: 'Ezra Stiles',
    calendarID: 'c_2sd6ipbve5qecpbvjk6n4krm88@group.calendar.google.com',
    nickname: 'Moose Butt',
    pictureUrl: 'EzraStiles',
    recommend: 'The Ezra, Jambler, Monkey Madness',
    textTime: '10 PM - 12:50 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Grace Hopper',
    calendarID: 'c_jpohh0fj3bjf9oa50uqhdsn210@group.calendar.google.com',
    nickname: 'The Trolley Stop',
    pictureUrl: 'GraceHopper',
    recommend: "Flying Pig, Buff Chik Ques, Cup O' Crack",
    textTime: '10 PM - 1 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Jonathan Edwards',
    calendarID: 'c_vidd8mkjnfknj5gf2qvsdo35o0@group.calendar.google.com',
    nickname: 'JE Buttery',
    pictureUrl: 'JonathanEdwards',
    recommend: "Allie's Cookies & Cream, The Fernandilla, Chicken Tenders",
    textTime: '9:30 PM - 12:30 AM | Sun-Th',
    startTime: '21:30:00',
  },
  {
    name: 'Morse',
    calendarID: 'c_t94grhoctefff88he108qrfrks@group.calendar.google.com',
    nickname: 'The Morsel',
    pictureUrl: 'Morse',
    recommend: 'Jim Stanley, The Thing Joe Gets, Bagels, The Austin',
    textTime: '10 PM - 12 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Pauli Murray',
    calendarID: 'c_v7d6qo6iu5s3dnq2hj852ccvkc@group.calendar.google.com',
    nickname: 'MY Butt',
    pictureUrl: 'PauliMurray',
    recommend: 'Fried Rice w/ Kimchi, Boba, French Toast',
    textTime: '10 PM - 1 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Pierson',
    calendarID: 'c_be16luiqg08s5fjbtl48klg0qg@group.calendar.google.com',
    nickname: 'Pierson Knight Club',
    pictureUrl: 'Pierson',
    recommend: 'the PCK Ques, CJ Wrap, Mango Smoothie',
    textTime: '10:30 PM - 12:30 AM | Sun-Th',
    startTime: '22:30:00',
  },
  {
    name: 'Saybrook',
    calendarID: 'c_h4k4tdrsial6if89k2qmuq0sic@group.calendar.google.com',
    nickname: 'The Squiche',
    pictureUrl: 'Saybrook',
    recommend: 'Manliestwich, Mozzliestwich, Crepe w/ Ice Cream',
    textTime: '10 PM - 12:45 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Silliman',
    calendarID: 'c_g2hs55m8rdnjo7ulvdm97k6jpk@group.calendar.google.com',
    nickname: 'Sillicafe',
    pictureUrl: 'Silliman',
    recommend: 'Curly Fries, Hot Chocolate, Apple Cider',
    textTime: '10 PM - 1 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Timothy Dwight',
    calendarID: 'c_5se1ib9s1al5e2vmtn7sgjrfmk@group.calendar.google.com',
    nickname: 'TD Butt',
    pictureUrl: 'TimothyDwight',
    recommend:
      'Grilled Cheese w/ Popcorn Chicken, Tortizza, Anything fried (they have a fryer!)',
    textTime: '10 PM - 1 AM | Sun-Th',
    startTime: '22:00:00',
  },
  {
    name: 'Trumbull',
    calendarID: 'c_fqjk0og8tsg22m9c5hpjochn9k@group.calendar.google.com',
    nickname: 'The TrumButt',
    pictureUrl: 'Trumbull',
    recommend: 'Dino Grilled Cheese, Cookies, Ice Cream Sandwich',
    textTime: '10 PM - 11:30 PM | Sun, M, W; 10 PM - 1 AM | T, Th',
    startTime: '22:00:00',
    //textTime: "Sun-Th, 9 PM - 10:30 PM; T, Th 11:30 PM - 1 AM"
  },
  {
    name: 'Silliman',
    calendarID: 'c_v18l89ksargnv5mo088c5urc14@group.calendar.google.com',
    nickname: 'The Acorn',
    pictureUrl: 'Acorn',
    recommend: 'Basic #1 Toast, Basic #2 Toast, Espresso',
    textTime: '9 AM - 8 PM | Daily',
    startTime: '09:00:00',
  },
  {
    name: 'Benjamin Franklin',
    calendarID: 'c_ksuav38sq7npf9g4f054p7680o@group.calendar.google.com',
    nickname: 'Beanjamin',
    pictureUrl: 'Beanjamin',
    recommend: 'Matcha Latte, Tea Lemonade, Toasts',
    textTime: '2 PM - 5 PM | Daily',
    startTime: '14:00:00',
  },
] as const;

type ButteryAdditions = { isOpen?: boolean; opensIn?: string };
type CachedButtery = {
  name: typeof cachedButteries[number]['name'];
  calendarID: typeof cachedButteries[number]['calendarID'];
  /*** Unique key that we'll use to identify this buttery */
  nickname: typeof cachedButteries[number]['nickname'];
  pictureUrl: typeof cachedButteries[number]['pictureUrl'];
  recommend: typeof cachedButteries[number]['recommend'];
  textTime: typeof cachedButteries[number]['textTime'];
  /*** The daily start time represented in 00:00:00 format. This is used to focus the calendar view on the appropriate time of day without scrolling for each buttery. */
  startTime: typeof cachedButteries[number]['startTime'];
};
export type Buttery = CachedButtery & ButteryAdditions;

export let butteries: Buttery[] = [...cachedButteries];
(async () => (butteries = await loadButteriesFromSheet()))();

export const residentialColleges = [
  'Errors or Suggestions',
  ...butteries.map((buttery) => `${buttery.nickname} | ${buttery.name}`),
];

async function loadButteriesFromSheet() {
  const res = await fetch(
    'https://opensheet.elk.sh/1NZyxbnUMkChmZC3umrW8vJdyus6PdPyRq8GbDLZiglU/Calendars'
  );
  const json = await res.json();
  return json;
}
