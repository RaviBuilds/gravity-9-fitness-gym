import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * GRAVITY 9 FITNESS CENTRE (Banjara Hills, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: name, phone, address line,
 * locality, city, state, postal code, landmark. PUBLICLY_REPORTED (owner
 * verification required before final-client production): description,
 * programs, amenities.
 *
 * HOURS — UNRESOLVED SOURCE CONFLICT (deliberately left empty, not invented):
 *   - Google Business Profile cue / Justdial / PageNearby report a split
 *     shift (Mon–Sat 05:30 AM–12:00 PM, reopening 04:00 PM or 05:00 PM until
 *     10:00 PM; Sunday 06:00 AM–10:00 AM or 11:00 AM).
 *   - Joonsquare reports 05:00 AM–10:00 PM continuous.
 *   The research says not to publish final hours until the owner confirms
 *   them, and a split shift cannot be expressed as one open/close pair per
 *   day. `hours` is therefore an empty array: structured data, the About
 *   schedule readout and the Location hours list all omit hours gracefully
 *   (the Location section points visitors to the phone number instead).
 *   OWNER QUESTION: exact opening/closing times per day, incl. afternoon
 *   break and Sunday.
 *
 * WHATSAPP: CONTACT.whatsapp is NOT_FOUND (explicitly not verified). The
 * template needs a number to build its wa.me links, so the verified main
 * phone number is used as the fallback. OWNER VERIFICATION REQUIRED that this
 * number is on WhatsApp, or supply a different one.
 *
 * EMAIL / WEBSITE: `info@gravity9fitness.com` is PUBLICLY_REPORTED
 * (Joonsquare) only, and the research notes the domain does not resolve to a
 * working site, so the address is NOT published here until the owner confirms
 * it. No website exists.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research. This is
 * the standard Google Maps search-by-name-and-address URL built from the
 * VERIFIED_OFFICIAL address text. No latitude, longitude or Place ID has been
 * invented.
 */
export const business: Business = {
  name: "Gravity 9 Fitness Centre",
  // Research tagline ("Your convenient, affordable neighborhood gym.") is
  // INFERRED, and no prices are published, so "affordable" is dropped.
  tagline: "Your convenient neighborhood gym.",
  description:
    "Gravity 9 Fitness Centre is a unisex gym in Banjara Hills, Hyderabad, with strength training, cardio and personal training, plus publicly listed group fitness such as Zumba.",
  phone: "+917893393786",
  whatsapp: {
    number: "+917893393786",
    message: "Hi, I'd like to know more about membership and training at Gravity 9 Fitness Centre, Banjara Hills.",
  },
  email: undefined,
  address: {
    addressLine: "Besides LV Prasad Eye Hospital, Road No. 2, Sri Nagar Colony, Kamalapuri Colony",
    locality: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500034",
    landmark: "LV Prasad Eye Hospital",
  },
  hours: [],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Gravity+9+Fitness+Centre+Besides+LV+Prasad+Eye+Hospital+Road+No+2+Sri+Nagar+Colony+Kamalapuri+Colony+Banjara+Hills+Hyderabad+500034",
  // Prompt A — PRIMARY brand colour "Athletic Yellow" #FFD21A. Entered here
  // exactly once and never altered; app/globals.css derives hover / active /
  // soft / border variants, and lib/color.ts picks the near-black foreground
  // for text on a yellow fill (white would fail WCAG on this hex).
  accentColor: "#FFD21A",
  // Prompt A — SECONDARY brand colour is "MANUAL INPUT REQUIRED" and was not
  // supplied. No colour is invented: per docs/MASTER-GYM-CUSTOMIZATION-SOP.md
  // §8, a gym with no secondary colour sets it equal to accentColor, so the
  // site renders as a deliberate one-colour yellow-on-black system.
  // TODO(owner/Prompt A): replace with the approved secondary hex when supplied.
  secondaryColor: "#FFD21A",
};
