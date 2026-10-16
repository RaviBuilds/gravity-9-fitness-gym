import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * GRAVITY 9 FITNESS CENTRE — populated from docs/Gym-research.md
 * (ABOUT.zones, ABOUT.attributes). Unisex is VERIFIED_OFFICIAL; everything
 * else below is PUBLICLY_REPORTED (directories / research report). Owner
 * verification is required before final-client production.
 *
 * No station counts, floor counts or other metrics are published: the
 * research supplies none, and none are invented.
 *
 * Not rendered (checked, not verifiable): the swimming pool is a
 * CONFLICTING_SOURCES directory listing the research suspects is a
 * miscategorisation, so it is kept below with `verified: false`. "Spacious"
 * is a reviewer-described theme, not a measured facility fact, so it is also
 * kept `verified: false`.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/gravity-9-banjara-hills-about-gym-interior.jpg",
    alt: "Gravity 9 Fitness Centre training floor in Banjara Hills, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength training",
      detail: "Free weights, dumbbell racks and plate-loaded equipment, including an angled leg press.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio",
      detail: "Treadmills and indoor cycling bikes or elliptical trainers.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "group-fitness",
      label: "Group fitness",
      detail: "Zumba is publicly listed. Ask the gym for the current class schedule.",
      icon: "floor",
      verified: true,
    },
  ],
  attributes: [
    { id: "unisex", label: "Unisex gym", verified: true },
    { id: "air-conditioning", label: "Air-conditioned", verified: true },
    { id: "lockers", label: "Lockers", verified: true },
    { id: "showers", label: "Basic shower facilities", verified: true },
    { id: "wifi", label: "Free Wi-Fi", verified: true },
    { id: "accessibility", label: "Wheelchair-accessible entrance and exit", verified: true },
    { id: "first-aid", label: "First-aid kit", verified: true },
    // Reviewer-described theme, not a measured facility fact — kept as the
    // record of what was checked, never rendered.
    { id: "spacious", label: "Spacious layout", verified: false },
    // CONFLICTING_SOURCES: a Justdial listing the research suspects is a
    // miscategorisation. Never render without direct owner confirmation.
    { id: "swimming-pool", label: "Swimming pool", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
