// Shared content model for the site. Everything an admin can edit lives here.

export interface Tag {
  label: string;
  /** Highlighted tags use the orange accent style; others are neutral. */
  highlight: boolean;
}

export interface EventItem {
  id: string;
  tags: Tag[];
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  statusLabel: string;
  statusNote: string;
  ctaLabel: string;
  ctaUrl: string;
}

export interface HackathonMeta {
  date: string;
  time: string;
  location: string;
  participants: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  desc: string;
}

export interface HackathonContent {
  badges: Tag[];
  /** Two title words; the first letter of each renders in the orange italic accent. */
  titlePart1: string;
  titlePart2: string;
  description: string;
  meta: HackathonMeta;
  schedule: ScheduleItem[];
}

export interface SiteContent {
  eventsHeading: string;
  eventsSubtitle: string;
  events: EventItem[];
  hackathon: HackathonContent;
}
