import type { SiteContent } from "./types";

// The default content mirrors what was originally hardcoded in the pages.
// The admin panel edits a copy of this stored in localStorage; "Reset to
// defaults" restores these values.
export const defaultContent: SiteContent = {
  eventsHeading: "Upcoming Events",
  eventsSubtitle:
    "Connect, collaborate, and build with our community at our signature gatherings and workshops.",
  events: [
    {
      id: "village-summit-2026",
      tags: [
        { label: "Flagship Event", highlight: true },
        { label: "Networking & Panels", highlight: false },
      ],
      title: "The Village Summit 2026",
      description:
        "Our premier annual summit designed to bring together visionary student creators, builders, and builders-at-heart. Join us for a curated evening featuring interactive panels with young founders, creative showcases, and unparalleled networking opportunities.",
      date: "June 15, 2026",
      time: "6:00 PM — 9:30 PM EST",
      location: "Innovation Hub, Main Pavilion",
      statusLabel: "Registrations Open",
      statusNote: "Limited Seats Remaining",
      ctaLabel: "Secure Your Spot",
      ctaUrl: "",
    },
  ],
  hackathon: {
    badges: [
      { label: "12-Hour Hackathon", highlight: true },
      { label: "Open to All Students", highlight: false },
    ],
    titlePart1: "Village",
    titlePart2: "Hacks",
    description:
      "Our flagship hackathon bringing together the brightest student minds to build, innovate, and compete. 12 hours. One theme. Endless possibilities.",
    meta: {
      date: "July 20, 2026",
      time: "9:00 AM — 10:30 PM",
      location: "Innovation Hub, Main Campus",
      participants: "150 Participants Max",
    },
    schedule: [
      { id: "s1", time: "9:00 AM", title: "Check-in & Breakfast", desc: "Registration, team formation, and networking over coffee." },
      { id: "s2", time: "10:00 AM", title: "Opening Ceremony", desc: "Welcome address, theme reveal, and judging criteria walkthrough." },
      { id: "s3", time: "10:30 AM", title: "Hacking Begins", desc: "Teams start building. Mentors available for guidance." },
      { id: "s4", time: "1:00 PM", title: "Lunch Break", desc: "Refuel and recharge — catered lunch provided for all participants." },
      { id: "s5", time: "3:00 PM", title: "Checkpoint 1", desc: "Quick progress demos. Mentors rotate across teams." },
      { id: "s6", time: "6:00 PM", title: "Dinner & Lightning Talks", desc: "Guest speakers share insights while teams take a break." },
      { id: "s7", time: "9:00 PM", title: "Final Submissions", desc: "Code freeze. All projects must be submitted by this time." },
      { id: "s8", time: "9:30 PM", title: "Demo & Judging", desc: "Teams present to judges. Audience voting opens." },
      { id: "s9", time: "10:30 PM", title: "Awards & Closing", desc: "Winners announced, prizes distributed, and closing remarks." },
    ],
  },
};
