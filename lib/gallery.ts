import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * GRAVITY 9 FITNESS CENTRE — real facility photographs supplied by the
 * operator (public/assets/gallery/gravity-9-banjara-hills-gallery-<subject>.jpg).
 * Filenames follow docs/MASTER-GYM-ASSET-CONTRACT.md; a photo can be swapped
 * in place without touching this file.
 *
 * ALT TEXT describes what each frame visibly shows. Re-check it if a photo is
 * replaced. No claim, count, award or superlative is encoded here.
 *
 * ORDER is editorial: wide floor shots first, then strength, then
 * conditioning and people. The two people photos are the operator's own
 * supplied images; confirm member/trainer consent before final-client launch.
 * Unused lower-resolution duplicates (5.jpg, 6.jpg) remain in the folder.
 */
const GALLERY = "/assets/gallery/gravity-9-banjara-hills-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Elliptical trainers and yellow indoor cycling bikes on the cardio floor at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-dumbbell-rack.jpg`,
    alt: "Two-tier rack of rubber-coated dumbbells from 12.5 to 30 at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-leg-press.jpg`,
    alt: "Member training on an angled plate-loaded leg press at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-plate-loaded-machine.jpg`,
    alt: "Plate-loaded strength machine on the training floor at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-plate-loaded-station.jpg`,
    alt: "Plate-loaded station with a weight plate on the wood-effect floor at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-indoor-cycling-bikes.jpg`,
    alt: "Three yellow indoor cycling bikes beside a large training tyre at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-partner-dumbbell-squats.jpg`,
    alt: "Two people performing dumbbell squats side by side on the turf area at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-cable-station.jpg`,
    alt: "Cable and bench stations with members training at Gravity 9 Fitness Centre",
  },
  {
    src: `${GALLERY}-heavy-bag-training.jpg`,
    alt: "Member punching a heavy bag at Gravity 9 Fitness Centre",
  },
];