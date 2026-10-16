import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * GRAVITY 9 FITNESS CENTRE — programs from docs/Gym-research.md (PROGRAMS.*).
 * Every entry is PUBLICLY_REPORTED (directories / research report); owner
 * verification of current availability is required before final-client
 * production. Descriptions are the research descriptions, shortened; no
 * schedule, trainer, outcome or health claim is added.
 *
 *  - Zumba: the Wednesday/Thursday 7:00–8:00 PM schedule is reported by
 *    Magicpin only and needs owner confirmation, so no timing is published.
 *  - Vinyasa Yoga: PUBLICLY_REPORTED as a directory-listed option; worded as
 *    "listed" and flagged for owner confirmation.
 *  - CrossFit: status INFERRED (low-confidence directory listing, no
 *    affiliation established) -> `verified: false`, so it does NOT render. Its
 *    final placeholder filename is established so enabling it later is a
 *    one-flag change once the owner confirms the program and wording.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed. Here `conditioning` is carried by "Cardio Training" (the
 * research's conditioning-category cardio program).
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real Gravity 9 photography — no code change.
 */
const ASSET = "/assets/programs/gravity-9-banjara-hills-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description:
      "Resistance training on machines and free weights, with plate-loaded equipment on the floor.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "One-on-one coaching and customized workout guidance, built around what you want to train.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Cardio Training",
    description: "Cardio equipment on the floor, including treadmills and indoor cycling bikes.",
    icon: "cardio",
    image: `${ASSET}-cardio-training.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio training",
    ctaHref: undefined,
  },
  {
    id: "zumba",
    name: "Zumba",
    description: "Group dance-fitness classes. Ask the gym for the current class schedule.",
    icon: "cardio",
    image: `${ASSET}-zumba.jpg`,
    verified: true,
    ctaLabel: "Ask about Zumba",
    ctaHref: undefined,
  },
  {
    id: "yoga",
    name: "Vinyasa Yoga",
    description: "Listed as a fitness option. Ask the gym about current classes and timings.",
    icon: "floor",
    image: `${ASSET}-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about yoga",
    ctaHref: undefined,
  },
  {
    // INFERRED, low-confidence directory listing — kept as the record of what
    // was checked; does not render until the owner confirms the program.
    id: "crossfit",
    name: "CrossFit / Functional Training",
    description: "Listed by a directory as a fitness option.",
    icon: "equipment",
    image: `${ASSET}-crossfit-functional.jpg`,
    verified: false,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
];
