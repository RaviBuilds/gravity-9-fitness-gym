import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * GRAVITY 9 FITNESS CENTRE — PLACEHOLDER photography occupying final filenames
 * (public/assets/gallery/gravity-9-banjara-hills-gallery-<subject>.jpg).
 * docs/Gym-research.md ASSET_MANIFEST supplies no approved gym photography
 * (gallery: NOT_FOUND), so existing template images sit on these filenames.
 * The operator replaces each file IN PLACE with an owner-approved Gravity 9
 * photograph; filenames and this file stay unchanged.
 *
 * ALT TEXT describes the INTENDED FINAL SUBJECT (a documented facility zone
 * or program from the research), kept to what the research supports. When the
 * real photographs are dropped in, re-check each alt against the frame.
 *
 * Only subjects the research reports are listed: strength and free-weight
 * area, plate-loaded machines, cardio equipment, personal training, and
 * group fitness. No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/gravity-9-banjara-hills-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-training-floor.jpg`,
    alt: "Gravity 9 Fitness Centre training floor in Banjara Hills, Hyderabad",
  },
  {
    src: `${GALLERY}-strength-area.jpg`,
    alt: "Strength training area at Gravity 9 Fitness Centre, Banjara Hills",
  },
  {
    src: `${GALLERY}-free-weights.jpg`,
    alt: "Free weights and dumbbell racks at Gravity 9 Fitness Centre, Banjara Hills",
  },
  {
    src: `${GALLERY}-plate-loaded-machines.jpg`,
    alt: "Plate-loaded strength machines at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Cardio equipment area at Gravity 9 Fitness Centre, Banjara Hills",
  },
  {
    src: `${GALLERY}-personal-training.jpg`,
    alt: "Personal training on the gym floor at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-group-fitness-studio.jpg`,
    alt: "Group fitness space at Gravity 9 Fitness Centre, Banjara Hills",
  },
  {
    src: `${GALLERY}-gym-interior.jpg`,
    alt: "Gravity 9 Fitness Centre gym interior, Banjara Hills, Hyderabad",
  },
];