import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * GRAVITY 9 FITNESS CENTRE — from docs/Gym-research.md (FAQ.*). Only the
 * entries the research answers are used. The entries whose answer is `null`
 * are deliberately NOT created: opening hours (unresolved source conflict),
 * membership prices (not publicly disclosed), swimming pool (conflicting
 * sources), parking, payment methods and nutrition consultations (not
 * found). No cancellation / freeze / joining-fee / guest / refund FAQ is
 * added because the research supports none of them.
 *
 * Statuses: location and phone are VERIFIED_OFFICIAL; everything else is
 * PUBLICLY_REPORTED, so answers are worded as "reported" and owner
 * verification is required before final-client production. The facilities
 * entry is composed from ABOUT.attributes (PUBLICLY_REPORTED).
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Gravity 9 Fitness Centre located?",
    answer:
      "Besides LV Prasad Eye Hospital, Road No. 2, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034.",
  },
  {
    id: "02",
    question: "What is the contact phone number?",
    answer: "+91 78933 93786",
  },
  {
    id: "03",
    question: "Does the gym offer strength training and cardio?",
    answer:
      "Strength training and cardio are publicly reported offerings. Confirm current equipment and services with the gym before you visit.",
  },
  {
    id: "04",
    question: "Are personal training sessions available?",
    answer:
      "Personal training and customized workout guidance are publicly reported. Ask the gym about trainers and fees.",
  },
  {
    id: "05",
    question: "Are Zumba classes available?",
    answer:
      "Zumba is publicly listed for Wednesday and Thursday evenings, 7:00 PM to 8:00 PM. The current schedule needs to be confirmed with the gym.",
  },
  {
    id: "06",
    question: "Does the gym offer yoga or CrossFit?",
    answer:
      "Third-party directories list Vinyasa Yoga and CrossFit. Current availability and timings are not confirmed, so ask the gym before you visit.",
  },
  {
    id: "07",
    question: "What facilities does the gym have?",
    answer:
      "Public listings report an air-conditioned unisex gym with lockers, basic shower facilities, free Wi-Fi, a first-aid kit and a wheelchair-accessible entrance and exit.",
  },
];