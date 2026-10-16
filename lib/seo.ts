import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * GRAVITY 9 FITNESS CENTRE SEO configuration, from docs/Gym-research.md
 * (SEO.title_candidate / description_candidate / natural_location_wording —
 * INFERRED from verified business data). The title follows the research
 * candidate; the research advises against "premium" unless owner-approved.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO website for the business, and
 * gravity9fitness.com does not resolve to a working site, so it must not be
 * used here.
 */
export const seo: SEOConfiguration = {
  title: "Gravity 9 Fitness Centre | Unisex Gym in Banjara Hills, Hyderabad",
  description:
    "Gravity 9 Fitness Centre is a unisex gym near LV Prasad Eye Hospital, Road No. 2, Banjara Hills, Hyderabad, with strength training, cardio and personal training.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};