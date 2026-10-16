import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — method, education, nutrition, how
 * the services connect. It never repeats facility metrics, amenities, opening
 * hours or program names. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns station counts, floors, air-conditioning,
 *     changing rooms, showers, lockers and hours;
 *   - Section 02 (lib/services.ts) owns individual programs and classes.
 * Repeating them here would make three sections say the same thing.
 *
 * GRAVITY 9 FITNESS CENTRE — from docs/Gym-research.md (WHY_CHOOSE_US.*).
 * The landmark reason is VERIFIED_OFFICIAL (Google Business Profile address);
 * the other two are PUBLICLY_REPORTED (review text and a third-party
 * directory narrative) and are worded as reported, not as guarantees.
 * Owner verification is required before final-client production.
 *
 * Moved out on purpose (owned by other sections):
 *   - strength / cardio equipment and amenities (lib/about.ts)
 *   - programs and classes (lib/services.ts)
 *
 * Not used: affordability. Reviews mention it, but no prices are published,
 * and the research says not to publish comparative price claims.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Easy to find",
    description:
      "Beside LV Prasad Eye Hospital on Road No. 2, Banjara Hills.",
  },
  {
    title: "Beginner-friendly coaching",
    description:
      "Members describe an experienced trainer who shapes the workout around what you want.",
  },
  {
    title: "Owner feedback",
    description:
      "The owner is reported to be regularly present to take member feedback.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the reasons above;
 * it is never a superlative. A clone edits this object and the array, never
 * the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Close by. Beginner-friendly. Open to feedback.",
};