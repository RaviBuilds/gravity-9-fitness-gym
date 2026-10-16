import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * GRAVITY 9 FITNESS CENTRE — rating/reviewCount are VERIFIED_OFFICIAL (Google
 * Business Profile visual anchor in docs/Gym-research.md REVIEWS: 4.7 / 84
 * reviews, read on 2026-10-14). Owner / operator should re-read the live
 * Google count before launch.
 *
 * The cards in Section 06 are Google-attributed, so ONLY the two reviews the
 * research attributes to the Google/PageNearby aggregation are used. The
 * FITPASS ("Super. Trainer, Infrastructure.", "Best equipment.") and
 * Justdial ("Quality equipments.") quotations are PUBLICLY_REPORTED on other
 * platforms and are deliberately NOT shown under a Google label.
 * Both used reviews are reproduced verbatim, including the original
 * spelling, and carry the research's own reviewer label "Anonymous User" —
 * no reviewer name is invented. None carries a star rating (none supplied).
 * OWNER / SOURCE-PLATFORM ATTRIBUTION CHECK REQUIRED before final-client use.
 *
 * `tagline` is a plain restatement of the research's review themes
 * (convenient location, experienced trainer, beginner-friendly) — not a
 * quotation. The sentiment summary in the research is INFERRED and is not
 * reproduced.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Justdial or
 * FITPASS URL for the Google review CTA. googleBusinessProfileUrl uses a
 * Google Maps search-by-name-and-address query (the same safe fallback
 * pattern as lib/business.ts mapUrl). No Place ID or profile slug is
 * invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.7,
  reviewCount: 84,
  tagline:
    "Reviewers point to a convenient location, an experienced trainer and a good starting point for beginners.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Gravity+9+Fitness+Centre+Besides+LV+Prasad+Eye+Hospital+Road+No+2+Sri+Nagar+Colony+Kamalapuri+Colony+Banjara+Hills+Hyderabad+500034",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "ruben lobo",
      text: "I was staying at Banjara hills for a week , being a gym rat i thought why not look for a gym and have a quick workout i was looking for a tiny place with little to no crowd but to my surprise I found this gem of a gym the owner is very good at communicating which made it easy to for me to understand that you don't need a membership but you can pay as a guest and new these machines and equipment overall had an amazing workout 💯. Would recommend this place to anybody anyday 💯🤌🏼",
    },
    {
      name: "Gvpraveen Gvpk",
      text: "I am working out in this gym ... It's awesome with a very good trainer. The trainer is a well experienced one, can teach as you want and will Design your workout as your wish. Finally it's a good gym for beginners.",
    },
    {
      name: "Anonymous User",
      text: "It's awesome with a very good trainer. The trainer is a well experienced one, can teach as you want and will Design your workout as your wish. Finally it's a good gym for beginners.",
    },
    {
      name: "Anil Kumar",
      text: "The gym is awesome N well equipped N Spacious, And especially this gym has proper Management and responsible Trainers (RAMBABU and Bhargav) they guide you and motivate you to reach your fitness goals... I recommend anyone wants to start your fitness journey you can begin here.",
    },
  ],
};
