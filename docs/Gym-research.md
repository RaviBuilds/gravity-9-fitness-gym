# GYM RESEARCH PACKAGE — Gravity 9 Fitness Centre

Researched: 2026-10-14
Researcher: Gemini Deep Research
Phase: PROSPECT_DEMO
Source report: `Gravity 9 Gym Business Dossier.pdf`

> This file is the schema-normalized research package for the BLOGSPAGE AI gym website factory.
> It preserves the source report's findings while separating verified/publicly reported/inferred information. Non-`VERIFIED_OFFICIAL` fields require owner verification before final-client production.

> Factory-level content excluded from this research package: Hero content/artwork, transformation data, Training Intelligence, Between Sessions education, section headings/labels, and discount percentages are intentionally excluded.

## 1. BUSINESS

```yaml
BUSINESS:
  name:
    value: "Gravity 9 Fitness Centre"
    source: "Google Business Profile visual anchor described in Gravity 9 Gym Business Dossier.pdf, pp. 1-2; corroborated by PageNearby and other directories"
    status: VERIFIED_OFFICIAL
  tagline:
    value: "Your convenient, affordable neighborhood gym."
    source: "Gemini dossier, p. 15, describes this as tagline material; not established as an owner-approved tagline"
    status: INFERRED
  description:
    value: "A unisex gym and fitness centre offering general gym workouts, strength training, cardio, personal training, and publicly reported group classes."
    source: "Gemini dossier, pp. 1, 5, 7-9; source reports include Google Business Profile anchor and third-party directories"
    status: PUBLICLY_REPORTED
  category:
    value: "Gym and Fitness Centre; Unisex Gym"
    source: "Google Business Profile visual anchor and directory listings as summarized in the dossier, pp. 1, 4"
    status: VERIFIED_OFFICIAL
  primary_locality:
    value: "Banjara Hills"
    source: "Google Business Profile visual anchor and matching directory listings, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  branch_count:
    value: 1
    source: "Dossier branch-discovery review across Google Maps, Fitpass, Justdial, and Magicpin, p. 3"
    status: PUBLICLY_REPORTED
  year_established:
    value: 2018
    source: "Justdial listing as reported in dossier p. 4"
    status: PUBLICLY_REPORTED
```

## 2. CONTACT

```yaml
CONTACT:
  phone:
    value: "+91 78933 93786"
    source: "Google Business Profile visual anchor; corroborated by Magicpin and Joonsquare, dossier pp. 1-5"
    status: VERIFIED_OFFICIAL
  whatsapp:
    value: null
    source: "Dossier pp. 4-6; WhatsApp explicitly reported as not verified"
    status: NOT_FOUND
  email:
    value: "info@gravity9fitness.com"
    source: "Joonsquare directory, dossier pp. 3-5"
    status: PUBLICLY_REPORTED
  website:
    value: null
    source: "Website discovery audit and Google Business Profile linkage status, dossier pp. 2-3"
    status: NOT_FOUND
  instagram_url:
    value: null
    source: "Social-profile discovery summarized in dossier pp. 5-6 and 13"
    status: NOT_FOUND
  instagram_handle:
    value: null
    source: "No verified Instagram profile identified in the dossier, pp. 5-6 and 13"
    status: NOT_FOUND
  facebook_url:
    value: null
    source: "Social-profile discovery summarized in dossier pp. 5-6 and 13"
    status: NOT_FOUND
  youtube_url:
    value: null
    source: "Social-profile discovery summarized in dossier pp. 5-6 and 13"
    status: NOT_FOUND
  booking_url:
    value: "https://fitpass.co.in/studio/gravity-9-fitness-center-banjara-hills"
    source: "FITPASS partner page, dossier pp. 5 and 10; exact URL listed in source index"
    status: PUBLICLY_REPORTED
```

## 3. LOCATION

```yaml
LOCATION:
  address_line:
    value: "Besides LV Prasad Eye Hospital, Road No. 2, Sri Nagar Colony, Kamalapuri Colony"
    source: "Google Business Profile visual anchor described in dossier pp. 1-2; directory variants also appear in the dossier"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Banjara Hills"
    source: "Google Business Profile visual anchor and directories, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  city:
    value: "Hyderabad"
    source: "Google Business Profile visual anchor and directory listings, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  state:
    value: "Telangana"
    source: "Google Business Profile visual anchor and directory listings, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  postal_code:
    value: "500034"
    source: "Google Business Profile visual anchor and directory listings, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  landmark:
    value: "LV Prasad Eye Hospital"
    source: "Google Business Profile visual anchor and multiple directory listings, dossier pp. 1-5"
    status: VERIFIED_OFFICIAL
  map_url:
    value: null
    source: "Dossier says Google Maps URL was verified via the primary visual anchor but does not provide the exact URL"
    status: NOT_FOUND
  latitude:
    value: null
    source: "No coordinates provided in the dossier"
    status: NOT_FOUND
  longitude:
    value: null
    source: "No coordinates provided in the dossier"
    status: NOT_FOUND
```

Location note: The dossier also references Road No. 2, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills. It does not report a floor number. Do not add a floor number.

## 4. HOURS

The dossier contains a material conflict between split-shift hours shown by the Google Business Profile visual anchor / Justdial / PageNearby and continuous hours listed by Joonsquare. The day-specific times below preserve the reported alternatives; do not publish final hours until the owner confirms them.

```yaml
HOURS:
  monday:
    open:
      value: "05:30 AM"
      source: "Justdial and PageNearby, as summarized in dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    close:
      value: "12:00 PM; reported reopening at 04:00 PM or 05:00 PM and closing at 10:00 PM"
      source: "Google Business Profile visual anchor inference; Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    alternative_report:
      value: "05:00 AM–10:00 PM continuous"
      source: "Joonsquare, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
  tuesday:
    open:
      value: "05:30 AM"
      source: "Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    close:
      value: "12:00 PM; reported reopening at 04:00 PM or 05:00 PM and closing at 10:00 PM"
      source: "Google Business Profile visual anchor inference; Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    alternative_report:
      value: "05:00 AM–10:00 PM continuous"
      source: "Joonsquare, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
  wednesday:
    open:
      value: "05:30 AM"
      source: "Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    close:
      value: "12:00 PM; reported reopening at 04:00 PM or 05:00 PM and closing at 10:00 PM"
      source: "Google Business Profile visual anchor inference; Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    alternative_report:
      value: "05:00 AM–10:00 PM continuous"
      source: "Joonsquare, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
  thursday:
    open:
      value: "05:30 AM"
      source: "Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    close:
      value: "12:00 PM; reported reopening at 04:00 PM or 05:00 PM and closing at 10:00 PM"
      source: "Google Business Profile visual anchor inference; Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    alternative_report:
      value: "05:00 AM–10:00 PM continuous"
      source: "Joonsquare, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
  friday:
    open:
      value: "05:30 AM"
      source: "Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    close:
      value: "12:00 PM; reported reopening at 04:00 PM or 05:00 PM and closing at 10:00 PM"
      source: "Google Business Profile visual anchor inference; Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    alternative_report:
      value: "05:00 AM–10:00 PM continuous"
      source: "Joonsquare, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
  saturday:
    open:
      value: "05:30 AM"
      source: "Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    close:
      value: "12:00 PM; reported reopening at 04:00 PM or 05:00 PM and closing at 10:00 PM"
      source: "Google Business Profile visual anchor inference; Justdial and PageNearby, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
    alternative_report:
      value: "05:00 AM–10:00 PM continuous"
      source: "Joonsquare, dossier pp. 6-7"
      status: CONFLICTING_SOURCES
  sunday:
    open:
      value: "06:00 AM"
      source: "Justdial / PageNearby and Joonsquare alternatives, dossier p. 7"
      status: CONFLICTING_SOURCES
    close:
      value: "10:00 AM or 11:00 AM"
      source: "Justdial / PageNearby and Joonsquare alternatives, dossier p. 7"
      status: CONFLICTING_SOURCES
  split_shifts_reported:
    value: "Monday–Saturday: 05:30 AM–12:00 PM, then reopening at either 04:00 PM or 05:00 PM until 10:00 PM; Sunday reported as 06:00 AM–10:00 AM or 11:00 AM"
    source: "Google Business Profile visual anchor inference, Justdial, PageNearby, and Joonsquare comparisons, dossier pp. 6-7"
    status: CONFLICTING_SOURCES
```

## 5. ABOUT

```yaml
ABOUT:
  short_description:
    value: "A locally operated unisex gym in Banjara Hills with publicly reported strength training, cardio, personal training, and group fitness offerings."
    source: "Dossier pp. 1, 4-5, 7-10"
    status: PUBLICLY_REPORTED
  positioning:
    value: "Convenient neighborhood gym described in the dossier as approachable for beginners, with foundational equipment and owner involvement."
    source: "PageNearby and directory descriptions/reviews summarized in dossier pp. 4-5, 12, 14"
    status: INFERRED
  story:
    value: null
    source: "The dossier reports an establishment year of 2018 from Justdial but no formal founder story, mission, or owner biography"
    status: NOT_FOUND
  zones:
    - id: "strength"
      label: "Strength and resistance training"
      value: "Free weights, dumbbell racks, and plate-loaded equipment including an angled leg press are reported."
      source: "Dossier pp. 8-10"
      status: PUBLICLY_REPORTED
    - id: "cardio"
      label: "Cardio"
      value: "Treadmills and indoor cycling bikes/elliptical trainers are reported."
      source: "Dossier p. 10"
      status: PUBLICLY_REPORTED
    - id: "group-fitness"
      label: "Group fitness"
      value: "Zumba is listed by Magicpin with Wednesday and Thursday sessions reported as 7:00 PM–8:00 PM; current schedule needs confirmation."
      source: "Magicpin as summarized in dossier pp. 8 and 20"
      status: PUBLICLY_REPORTED
  attributes:
    - id: "unisex"
      label: "Unisex facility"
      value: true
      source: "Google Business Profile anchor and directory categorization, dossier pp. 1 and 4"
      status: VERIFIED_OFFICIAL
    - id: "air-conditioning"
      label: "Air-conditioned"
      value: true
      source: "Joonsquare and dossier facility summary, pp. 5 and 9"
      status: PUBLICLY_REPORTED
    - id: "spacious-layout"
      label: "Spacious layout"
      value: "Reviewers describe the gym as spacious."
      source: "Justdial review themes summarized in dossier pp. 9 and 12"
      status: PUBLICLY_REPORTED
    - id: "lockers"
      label: "Lockers"
      value: true
      source: "PageNearby / dossier facility summary, p. 9"
      status: PUBLICLY_REPORTED
    - id: "showers"
      label: "Basic shower facilities"
      value: true
      source: "PageNearby / dossier facility summary, p. 9"
      status: PUBLICLY_REPORTED
    - id: "restrooms"
      label: "Restrooms"
      value: true
      source: "PageNearby / dossier facility summary, p. 9"
      status: PUBLICLY_REPORTED
    - id: "wifi"
      label: "Free Wi-Fi"
      value: true
      source: "Joonsquare / dossier facility summary, pp. 5 and 9"
      status: PUBLICLY_REPORTED
    - id: "wheelchair-access"
      label: "Wheelchair-accessible entrance and exit"
      value: true
      source: "Magicpin / dossier facility summary, p. 9"
      status: PUBLICLY_REPORTED
    - id: "wheelchair-car-park"
      label: "Wheelchair-accessible car park"
      value: true
      source: "Magicpin / dossier facility summary, p. 9"
      status: PUBLICLY_REPORTED
    - id: "first-aid"
      label: "First-aid kit"
      value: true
      source: "Joonsquare / dossier facility summary, p. 9"
      status: PUBLICLY_REPORTED
    - id: "swimming-pool"
      label: "Swimming pool"
      value: null
      source: "Justdial listing conflicts with absence of corroborating visual or testimonial evidence, dossier pp. 9 and 20"
      status: CONFLICTING_SOURCES
```

## 6. PROGRAMS

```yaml
PROGRAMS:
  - id: "strength-training"
    name: "Strength Training / Gym Workout"
    description: "Resistance training using machinery and free weights is reported."
    category: "strength"
    image_opportunity: "Training-floor or free-weight image from the operator-approved photo set."
    source: "Justdial and dossier service summary, pp. 7-8"
    status: PUBLICLY_REPORTED
  - id: "cardio-training"
    name: "Cardio Training"
    description: "Cardio equipment use is reported; treadmills and indoor cycling bikes/elliptical trainers are listed in the dossier."
    category: "conditioning"
    image_opportunity: "Cardio-equipment image from the operator-approved photo set."
    source: "Dossier pp. 8 and 10"
    status: PUBLICLY_REPORTED
  - id: "personal-training"
    name: "Personal Training"
    description: "One-on-one coaching and customized workout guidance are reported."
    category: "personal"
    image_opportunity: "Coach guiding a member on the gym floor, using an operator-approved photo."
    source: "PageNearby and dossier service summary, pp. 7-9"
    status: PUBLICLY_REPORTED
  - id: "zumba"
    name: "Zumba Classes"
    description: "Magicpin reports group dance fitness on Wednesdays and Thursdays from 7:00 PM to 8:00 PM; current activity and schedule require owner confirmation."
    category: "group"
    image_opportunity: "Group dance-fitness image from the operator-approved photo set, only if this program is confirmed active."
    source: "Magicpin, as summarized in dossier pp. 8 and 20"
    status: PUBLICLY_REPORTED
  - id: "vinyasa-yoga"
    name: "Vinyasa Yoga"
    description: "Listed as a fitness option on directories, but no specific class timing is published and the current offering is unconfirmed."
    category: "recovery"
    image_opportunity: "Yoga class image from the operator-approved photo set, only if this program is confirmed active."
    source: "Justdial / dossier service summary, pp. 8 and 16"
    status: PUBLICLY_REPORTED
  - id: "crossfit"
    name: "CrossFit"
    description: "Listed as an available fitness option by a directory; the dossier itself flags the listing as low confidence and warns against assuming official CrossFit affiliation."
    category: "conditioning"
    image_opportunity: "Functional-training image from the operator-approved photo set, only if the owner confirms the program and wording."
    source: "Justdial listing and dossier analysis, pp. 8-9 and 20"
    status: INFERRED
```

## 7. WHY_CHOOSE_US

```yaml
WHY_CHOOSE_US:
  - title: "Convenient local landmark"
    description: "The gym is listed beside LV Prasad Eye Hospital on Road No. 2 in Banjara Hills."
    basis: "Address and landmark repeated across the Google Business Profile anchor and directory listings."
    source: "Dossier pp. 1-5 and 14"
    status: VERIFIED_OFFICIAL
  - title: "Beginner-friendly coaching reported"
    description: "Public reviews describe trainers as experienced and willing to tailor workouts to member preferences."
    basis: "Review quotations and PageNearby narrative; trainer identities and qualifications are not published."
    source: "Dossier pp. 5, 12-13"
    status: PUBLICLY_REPORTED
  - title: "Strength and cardio equipment"
    description: "Public research reports free weights, resistance machinery, treadmills, and indoor cycling/elliptical equipment."
    basis: "Directory descriptions and visual evidence summarized in the dossier."
    source: "Dossier pp. 9-10"
    status: PUBLICLY_REPORTED
  - title: "Owner feedback involvement reported"
    description: "A third-party proxy page reports that the owner is regularly present to take member feedback."
    basis: "PageNearby narrative; owner identity and current operating practice are not independently documented in the package."
    source: "Dossier pp. 5 and 14"
    status: PUBLICLY_REPORTED
  - title: "Affordability mentioned in reviews"
    description: "Public review summaries mention affordable prices, but actual membership prices are not published in the dossier."
    basis: "Third-party review theme only; do not publish numerical pricing or comparative price claims."
    source: "Dossier pp. 11-12"
    status: PUBLICLY_REPORTED
  - title: "Spacious and air-conditioned environment reported"
    description: "Public sources describe a spacious gym with air conditioning."
    basis: "Directory and review summaries."
    source: "Dossier pp. 5 and 9-12"
    status: PUBLICLY_REPORTED
```

## 8. REVIEWS

```yaml
REVIEWS:
  google_rating:
    value: 4.7
    source: "Google Business Profile visual anchor as reported in dossier pp. 1-2; checked date stated as October 14, 2026"
    status: VERIFIED_OFFICIAL
  google_review_count:
    value: 84
    source: "Google Business Profile visual anchor as reported in dossier pp. 1-2; checked date stated as October 14, 2026"
    status: VERIFIED_OFFICIAL
  google_profile_url:
    value: null
    source: "Dossier states the profile URL was anchored/verified through the visual screenshot but does not reproduce the exact URL"
    status: NOT_FOUND
  rating_read_on:
    value: "2026-10-14"
    source: "Dossier p. 11"
    status: PUBLICLY_REPORTED
  selected_reviews:
    - reviewer: "V Tarun Kumar"
      text: "Super. Trainer, Infrastructure."
      date: "2026-08-06"
      source: "FITPASS, as quoted in dossier p. 12"
      status: PUBLICLY_REPORTED
    - reviewer: "Pakanati Sanjeeva Rao"
      text: "Best equipment."
      date: "2026-03-16"
      source: "FITPASS, as quoted in dossier p. 12"
      status: PUBLICLY_REPORTED
    - reviewer: "Anonymous User"
      text: "A unisex gym that has is located at a very convinient location and within easy reach. It has got basic equipment and anyone who is interested in basic fitness - this is the right place."
      date: null
      source: "Google/PageNearby aggregation, as quoted in dossier pp. 12-13"
      status: PUBLICLY_REPORTED
    - reviewer: "Anonymous User"
      text: "It's awesome with a very good trainer. The trainer is a well experienced one, can teach as you want and will Design your workout as your wish. Finally it's a good gym for beginners."
      date: null
      source: "Google/PageNearby aggregation, as quoted in dossier p. 13"
      status: PUBLICLY_REPORTED
    - reviewer: "Anonymous User"
      text: "Quality equipments."
      date: null
      source: "Justdial, as quoted in dossier p. 13"
      status: PUBLICLY_REPORTED
  sentiment_summary:
    value: "The dossier synthesizes recurring positive themes around affordability, ambience/spaciousness, staff friendliness and trainer experience, and equipment quality. The dossier reports no statistically significant negative themes in the sampled review summaries; this is not a guarantee that no negative reviews exist."
    source: "Gemini dossier review-theme analysis, pp. 11-12"
    status: INFERRED
  other_platform_metrics:
    - platform: "Justdial"
      rating:
        value: 4.9
        source: "Dossier p. 11, checked 2026-10-14"
        status: PUBLICLY_REPORTED
      review_count:
        value: 93
        source: "Dossier p. 11, checked 2026-10-14"
        status: PUBLICLY_REPORTED
    - platform: "FITPASS"
      rating:
        value: 4.9
        source: "Dossier p. 11, checked 2026-10-14"
        status: PUBLICLY_REPORTED
      review_count:
        value: 13
        source: "Dossier p. 11, checked 2026-10-14"
        status: PUBLICLY_REPORTED
```

## 9. PRICING

```yaml
PRICING:
  currency:
    value: "INR"
    source: "Dossier uses ₹ when discussing pricing context, p. 11"
    status: PUBLICLY_REPORTED
  publishes_pricing_publicly:
    value: false
    source: "Dossier states direct-to-consumer membership tariffs are not publicly disclosed, p. 10"
    status: PUBLICLY_REPORTED
  plans:
    daily:
      value: null
      source: "No Gravity 9 daily membership price reported; dossier p. 10"
      status: NOT_FOUND
    weekly:
      value: null
      source: "No Gravity 9 weekly membership price reported; dossier p. 10"
      status: NOT_FOUND
    monthly:
      value: null
      source: "No Gravity 9 monthly membership price reported; dossier p. 10"
      status: NOT_FOUND
    quarterly:
      value: null
      source: "No Gravity 9 quarterly membership price reported; dossier p. 10"
      status: NOT_FOUND
    half_year:
      value: null
      source: "No Gravity 9 six-month membership price reported; dossier pp. 10 and 20"
      status: NOT_FOUND
    annual:
      value: null
      source: "No Gravity 9 annual membership price reported; dossier pp. 10 and 20"
      status: NOT_FOUND
    special_training:
      value: null
      source: "Personal-training fees and package prices are not published in the dossier, pp. 10 and 20"
      status: NOT_FOUND
  other_listed_prices:
    value: null
    source: "No gym-specific prices found; dossier p. 10 explicitly distinguishes regional market context from the gym's undisclosed tariffs"
    status: NOT_FOUND
  admission_or_joining_fee:
    value: null
    source: "No admission or joining fee reported; dossier pp. 10 and 20"
    status: NOT_FOUND
  note:
    value: "Do not use the dossier's ₹2,000–₹5,000 local market context as Gravity 9 pricing; it is competitor/market context, not a gym tariff."
    source: "Dossier p. 11"
    status: INFERRED
```

## 10. INSTAGRAM

```yaml
INSTAGRAM:
  profile_url:
    value: null
    source: "Dossier social-profile discovery, pp. 5-6 and 13"
    status: NOT_FOUND
  handle:
    value: null
    source: "No verified Instagram handle identified in the dossier, pp. 5-6 and 13"
    status: NOT_FOUND
  follower_count:
    value: null
    source: "No official Instagram profile or follower count identified in the dossier"
    status: NOT_FOUND
  items: []
  notes:
    value: "The source report did not provide individual Instagram Reel URLs. Do not search for or invent Reel URLs as part of this conversion."
    source: "Dossier pp. 5-6 and 13"
    status: NOT_FOUND
```

## 11. FAQ

```yaml
FAQ:
  - question: "Where is Gravity 9 Fitness Centre located?"
    answer: "The reported address is Besides LV Prasad Eye Hospital, Road No. 2, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034."
    topic: "location"
    source: "Google Business Profile visual anchor and matching directory listings, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  - question: "What is the contact phone number?"
    answer: "+91 78933 93786"
    topic: "contact"
    source: "Google Business Profile visual anchor, dossier pp. 1-5"
    status: VERIFIED_OFFICIAL
  - question: "What are the gym's opening hours?"
    answer: null
    topic: "hours"
    source: "Conflicting reports from Google Business Profile visual anchor / Justdial / PageNearby and Joonsquare, dossier pp. 6-7 and 19-20"
    status: CONFLICTING_SOURCES
  - question: "Does the gym offer strength training and cardio?"
    answer: "Strength training and cardio are publicly reported offerings; confirm current equipment and services with management before final production."
    topic: "programs"
    source: "Dossier pp. 7-10"
    status: PUBLICLY_REPORTED
  - question: "Are personal training sessions available?"
    answer: "Personal training and customized workout guidance are publicly reported; fees, trainer identities, and credentials are not available in the source report."
    topic: "personal training"
    source: "Dossier pp. 7-8 and 10-11"
    status: PUBLICLY_REPORTED
  - question: "Are Zumba classes available?"
    answer: "Magicpin reportedly lists Zumba on Wednesdays and Thursdays from 7:00 PM to 8:00 PM; the current schedule requires owner confirmation."
    topic: "classes"
    source: "Dossier pp. 8 and 20"
    status: PUBLICLY_REPORTED
  - question: "Does the gym offer yoga or CrossFit?"
    answer: "Third-party directories list Vinyasa Yoga and CrossFit, but the dossier flags these offerings for confirmation; do not advertise them as active services until management confirms."
    topic: "classes"
    source: "Dossier pp. 8-9 and 19-20"
    status: PUBLICLY_REPORTED
  - question: "What are the membership prices?"
    answer: null
    topic: "pricing"
    source: "Dossier p. 10 states direct-to-consumer tariffs are not publicly disclosed"
    status: NOT_FOUND
  - question: "Is a swimming pool available?"
    answer: null
    topic: "facilities"
    source: "Justdial lists a swimming pool, but the dossier flags this as a likely miscategorization requiring direct confirmation, pp. 9 and 20"
    status: CONFLICTING_SOURCES
  - question: "Is there parking?"
    answer: null
    topic: "parking"
    source: "Dossier mentions wheelchair-accessible car park in a directory listing but does not establish general parking availability"
    status: NOT_FOUND
  - question: "What payment methods are accepted?"
    answer: null
    topic: "payments"
    source: "Dossier identifies payment methods as missing information, p. 17"
    status: NOT_FOUND
  - question: "Are nutrition consultations offered?"
    answer: null
    topic: "nutrition"
    source: "Dossier says nutritional consultations and meal-prep services are not found in the public record, p. 10"
    status: NOT_FOUND
```

## 12. SEO

```yaml
SEO:
  gym_name:
    value: "Gravity 9 Fitness Centre"
    source: "Google Business Profile visual anchor, dossier pp. 1-2"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Banjara Hills"
    source: "Google Business Profile visual anchor, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  city:
    value: "Hyderabad"
    source: "Google Business Profile visual anchor, dossier pp. 1-4"
    status: VERIFIED_OFFICIAL
  natural_location_wording:
    value: "Gravity 9 Fitness Centre near LV Prasad Eye Hospital, Road No. 2, Banjara Hills, Hyderabad"
    source: "Derived from reported business name, landmark, street, locality, and city"
    status: INFERRED
  title_candidate:
    value: "Gravity 9 Fitness Centre | Unisex Gym in Banjara Hills, Hyderabad"
    source: "Derived from reported business name, category, locality, and city; avoid 'premium' unless owner-approved"
    status: INFERRED
  description_candidate:
    value: "Explore Gravity 9 Fitness Centre, a unisex gym in Banjara Hills, Hyderabad, with publicly reported strength training, cardio and personal training."
    source: "Derived from dossier business identity and reported core programs, pp. 1, 7-10"
    status: INFERRED
  alt_text_context:
    value: "Use factual descriptions of the actual approved gym equipment, gym floor, and confirmed training activities; describe only what is visible in each image."
    source: "Dossier equipment and asset gaps, pp. 9-10 and 15-17"
    status: INFERRED
  reported_local_search_phrases:
    value:
      - "Unisex gym near LV Prasad Eye Hospital Banjara Hills"
      - "Beginner friendly gym Road No 2 Hyderabad"
      - "Cardio and strength training Banjara Hills"
      - "Zumba classes near Kamalapuri Colony"
    source: "Dossier p. 14; phrases are research suggestions, not measured keyword data"
    status: INFERRED
```

## 13. ASSET_MANIFEST

```yaml
ASSET_MANIFEST:
  logo:
    value: null
    source: "Dossier does not provide a downloadable logo asset or logo URL; source references a Google Business Profile visual anchor"
    usable: "unknown"
    status: NOT_FOUND
  candidates:
    - role: "about_interior"
      url: null
      subject: "High-resolution, well-lit photo of the actual gym floor and interior to be collected manually by operator"
      source: "Operator to collect manually; dossier p. 21 recommends high-resolution media"
      usable: "unknown"
      status: NOT_FOUND
    - role: "why_choose_anchor"
      url: null
      subject: "Authentic photo of the actual plate-loaded machines and cardio row, preferably without members unless consent is secured"
      source: "Operator to collect manually; dossier p. 21"
      usable: "unknown"
      status: NOT_FOUND
    - role: "gallery"
      url: null
      subject: "Operator-approved images of confirmed facilities, equipment, and active programs"
      source: "Operator to collect manually; facilities and program descriptions in dossier pp. 8-10"
      usable: "unknown"
      status: NOT_FOUND
    - role: "pricing_background"
      url: null
      subject: "Authentic gym interior image; collect only if needed after approved pricing content is supplied"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "faq_background"
      url: null
      subject: "Authentic gym interior or equipment image; collect manually if needed"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "og_image"
      url: null
      subject: "Approved logo and authentic gym photo composition to be created after source assets are supplied"
      source: "Operator to provide approved logo and photography"
      usable: "unknown"
      status: NOT_FOUND
```

## 14. SOURCE_LOG

The research report lists these sources and dates. Access date is recorded as `2026-10-14` where the dossier explicitly states the research was checked on that date; individual per-page access timestamps are not supplied.

```yaml
SOURCE_LOG:
  - priority: 1
    type: "Google Business Profile visual anchor supplied/described in source dossier"
    url: null
    accessed: "2026-10-14"
    fields_supplied: "Business name, primary address and landmark, phone, Google rating/review count, website-linkage absence, visible hours cue"
    status: VERIFIED_OFFICIAL
  - priority: 5
    type: "Third-party local business proxy page (PageNearby)"
    url: "https://pagenearby.com/hyderabad/banjara-hills/gravity-9-fitness-centre/"
    accessed: "2026-10-14"
    fields_supplied: "Qualitative review text, reported owner involvement, beginner-friendly positioning, basic equipment description, proxy-page evidence of missing proprietary site"
    status: PUBLICLY_REPORTED
  - priority: 5
    type: "Third-party directory (Joonsquare)"
    url: "https://www.joonsquare.com/gym-and-fitness-centre/gravity-9-fitness-center-hyderabad"
    accessed: "2026-10-14"
    fields_supplied: "Email, facility listings, continuous-hours alternative, business contact details"
    status: PUBLICLY_REPORTED
  - priority: 5
    type: "Third-party directory (Justdial)"
    url: "https://www.justdial.com/Hyderabad/Gravity-9-Fitness-Center-Beside-Lv-Prasad-Eye-Hospital-Banjara-Hills/040PXX40-XX40-181221121024-B6N6_BZDET"
    accessed: "2026-10-14"
    fields_supplied: "Reported establishment year, rating/review count, facilities, review themes, listed programs, hours, swimming-pool conflict"
    status: PUBLICLY_REPORTED
  - priority: 5
    type: "Third-party local discovery / offers directory (Magicpin)"
    url: "https://magicpin.in/Hyderabad/Banjara-Hills/Fitness/Gravity-9-Fitness-Center/store/7505a8"
    accessed: "2026-10-14"
    fields_supplied: "Reported Zumba schedule, accessibility attributes, name/location corroboration"
    status: PUBLICLY_REPORTED
  - priority: 5
    type: "Third-party fitness aggregator (FITPASS)"
    url: "https://fitpass.co.in/studio/gravity-9-fitness-center-banjara-hills"
    accessed: "2026-10-14"
    fields_supplied: "Partner listing, booking destination, rating/review count, selected review text, name/location corroboration"
    status: PUBLICLY_REPORTED
  - priority: 7
    type: "Aggregate local pricing context (Justdial category pages; not gym-specific tariff)"
    url: "https://www.justdial.com/Hyderabad/Unisex-Gyms-in-Yousufguda/nct-11576125"
    accessed: "2026-10-14"
    fields_supplied: "Local category-level price context only; must not be used as Gravity 9 pricing"
    status: PUBLICLY_REPORTED
  - priority: 7
    type: "Aggregate local CrossFit pricing context (Justdial category page)"
    url: "https://www.justdial.com/Hyderabad/Crossfit-Gyms-For-Men-in-Yousufguda/nct-12151248"
    accessed: "2026-10-14"
    fields_supplied: "Category-level price context only; not a Gravity 9 tariff or proof of CrossFit affiliation"
    status: PUBLICLY_REPORTED
  - priority: 7
    type: "Transit context (Moovit)"
    url: "https://moovitapp.com/index/en/public_transit-Road_No_2_Banjara_Hills-Hyderabad-site_150008254-5997"
    accessed: "2026-10-14"
    fields_supplied: "General local transit context as summarized in dossier; no exact gym coordinates supplied"
    status: PUBLICLY_REPORTED
  - priority: 7
    type: "Transit context (Moovit)"
    url: "https://moovitapp.com/index/en/public_transit-L_V_Prasad_Eye_Institute-Hyderabad-site_148656173-5997"
    accessed: "2026-10-14"
    fields_supplied: "Landmark/transit context as summarized in dossier"
    status: PUBLICLY_REPORTED
  - priority: 7
    type: "Business Bioscopes / transit landmark context"
    url: "https://www.businessbioscopes.com/pvr-rk-cineplex-banjara-hills-hyderabad/"
    accessed: "2026-10-14"
    fields_supplied: "Contextual source listed in dossier source index; no core gym field should rely solely on this source"
    status: PUBLICLY_REPORTED
```

## 15. VERIFICATION_NOTES

### conflicts

```yaml
conflicts:
  - field: "HOURS.monday-saturday"
    values:
      - value: "Split shift: 05:30 AM–12:00 PM, then 04:00 PM or 05:00 PM–10:00 PM"
        source: "Google Business Profile visual anchor cue; Justdial and PageNearby, dossier pp. 6-7"
      - value: "Continuous: 05:00 AM–10:00 PM"
        source: "Joonsquare, dossier pp. 6-7"
    note: "Do not publish final hours until gym management confirms exact opening, closing, and afternoon reopening times."
    status: CONFLICTING_SOURCES
  - field: "HOURS.sunday"
    values:
      - value: "06:00 AM–10:00 AM or 11:00 AM"
        source: "Justdial / PageNearby, dossier p. 7"
      - value: "06:00 AM–11:00 AM"
        source: "Joonsquare, dossier p. 7"
    note: "Confirm Sunday opening and closing time with management."
    status: CONFLICTING_SOURCES
  - field: "ABOUT.attributes.swimming-pool"
    values:
      - value: "Swimming pool listed among highlights"
        source: "Justdial, dossier pp. 9 and 20"
      - value: "No corroborating visual or testimonial evidence found; dossier suspects a directory miscategorization"
        source: "Gemini dossier analysis, pp. 9 and 20"
    note: "Do not publish a swimming pool claim unless the owner directly confirms the facility exists."
    status: CONFLICTING_SOURCES
  - field: "PROGRAMS.active_group_classes"
    values:
      - value: "Zumba, Wednesday and Thursday 7:00 PM–8:00 PM"
        source: "Magicpin, dossier pp. 8 and 20"
      - value: "Vinyasa Yoga and CrossFit also listed"
        source: "Justdial, dossier pp. 8-9 and 20"
    note: "Confirm which group classes are currently active, exact class times, and whether any CrossFit terminology reflects an affiliated program or generic functional training."
    status: CONFLICTING_SOURCES
  - field: "CONTACT.website"
    values:
      - value: "No active proprietary website found; GBP not linked to a website"
        source: "Website discovery audit and GBP anchor, dossier pp. 2-3"
      - value: "Branded email suggests gravity9fitness.com may have been acquired for email, but domain does not resolve to an active consumer-facing site"
        source: "Joonsquare and domain checks summarized in dossier p. 3"
    note: "Treat the website as NOT_FOUND. Ask the owner whether they control gravity9fitness.com and can provide DNS access; do not treat the domain as a working official website."
    status: CONFLICTING_SOURCES
```

### not_found

```yaml
not_found:
  - field: "CONTACT.website"
    note: "No active proprietary website found after exact-name, locality, phone, and domain-variation checks; GBP showed an Add website prompt."
    sources_searched: "Dossier pp. 2-3"
    status: NOT_FOUND
  - field: "CONTACT.whatsapp"
    note: "WhatsApp number is explicitly marked not verified."
    sources_searched: "Dossier pp. 4-6"
    status: NOT_FOUND
  - field: "CONTACT.instagram_url / CONTACT.instagram_handle"
    note: "No verified Instagram profile found in the research."
    sources_searched: "Dossier pp. 5-6 and 13"
    status: NOT_FOUND
  - field: "CONTACT.facebook_url"
    note: "No verified Facebook profile found."
    sources_searched: "Dossier pp. 5-6 and 13"
    status: NOT_FOUND
  - field: "CONTACT.youtube_url"
    note: "No verified YouTube profile found."
    sources_searched: "Dossier pp. 5-6 and 13"
    status: NOT_FOUND
  - field: "LOCATION.map_url"
    note: "The report says the Google Maps URL was verified via the visual anchor but does not provide the exact URL."
    sources_searched: "Dossier pp. 3-4"
    status: NOT_FOUND
  - field: "LOCATION.latitude / LOCATION.longitude"
    note: "Exact coordinates are not supplied."
    sources_searched: "Entire dossier; location section pp. 3-5"
    status: NOT_FOUND
  - field: "HOURS.*"
    note: "Exact final schedule unresolved due to split-shift versus continuous-hours conflict."
    sources_searched: "Google Business Profile visual anchor, Justdial, PageNearby, and Joonsquare as summarized in dossier pp. 6-7"
    status: CONFLICTING_SOURCES
  - field: "PRICING.plans"
    note: "Gym-specific daily, weekly, monthly, quarterly, half-year, annual, personal-training, and joining prices were not publicly disclosed."
    sources_searched: "Directory and public tariff audit summarized in dossier pp. 10-11 and 20"
    status: NOT_FOUND
  - field: "TRAINERS.names / TRAINERS.qualifications"
    note: "No trainer names, bios, or certifications found."
    sources_searched: "Dossier p. 11 and p. 20"
    status: NOT_FOUND
  - field: "INSTAGRAM.items"
    note: "No individual Reel URLs were supplied in the research report."
    sources_searched: "Dossier pp. 5-6 and 13"
    status: NOT_FOUND
  - field: "REVIEWS.google_profile_url"
    note: "Exact Google Business Profile URL is not printed in the report."
    sources_searched: "Dossier pp. 1-2 and 11"
    status: NOT_FOUND
  - field: "ASSET_MANIFEST.logo / candidates"
    note: "No direct downloadable logo or approved high-resolution gym photography URLs supplied."
    sources_searched: "Dossier pp. 15-17 and 21"
    status: NOT_FOUND
  - field: "TRANSFORMATION_DATA"
    note: "No quantitative transformation cases, names, journey durations, before/after weights, BMI changes, body-fat changes, or nutritional protocols documented."
    sources_searched: "Dossier p. 14"
    status: NOT_FOUND
  - field: "ABOUT.story"
    note: "No owner/founder name, formal mission/vision, or founder biography found."
    sources_searched: "Dossier pp. 4-5 and 16"
    status: NOT_FOUND
  - field: "FAQ.payment_methods / FAQ.membership_policies / FAQ.minimum_age"
    note: "Payment methods, freeze/cancellation policies, and minimum age requirements are identified as missing."
    sources_searched: "Dossier p. 17"
    status: NOT_FOUND
```

### publicly_reported_only

```yaml
publicly_reported_only:
  - field: "BUSINESS.description"
    note: "Normalized from third-party descriptions and the dossier's synthesis; owner should approve final public wording."
  - field: "BUSINESS.branch_count"
    note: "One branch is reported based on directory and map reconnaissance; owner should confirm."
  - field: "BUSINESS.year_established"
    note: "2018 comes from Justdial and is not owner-confirmed."
  - field: "CONTACT.email"
    note: "Email is listed by Joonsquare; verify that it is current and controlled by the gym."
  - field: "CONTACT.booking_url"
    note: "FITPASS is a third-party booking/partner page, not the gym's proprietary booking system."
  - field: "HOURS.*"
    note: "OWNER VERIFICATION REQUIRED; material cross-source conflict exists."
  - field: "ABOUT.positioning"
    note: "Beginner-friendly and neighborhood positioning is inferred from public descriptions/reviews."
  - field: "ABOUT.zones"
    note: "Zones and equipment are described by public listings and source analysis; verify current inventory."
  - field: "ABOUT.attributes.*"
    note: "Amenities come from third-party listings; confirm current availability. Swimming pool is explicitly conflicting and must not be published without confirmation."
  - field: "PROGRAMS.*"
    note: "Programs are directory-reported; confirm active programs, schedules, and approved names."
  - field: "WHY_CHOOSE_US.*"
    note: "Anchors are based on public listings and review themes; avoid unsupported superiority claims."
  - field: "REVIEWS.selected_reviews"
    note: "Quoted reviews are attributed to third-party aggregators; confirm usage permissions and preserve exact wording/attribution."
  - field: "REVIEWS.sentiment_summary"
    note: "Synthesis of review themes is INFERRED and not a verified universal customer opinion."
  - field: "FAQ.*"
    note: "FAQ answers derived from public research must be owner-checked before launch, especially hours, classes, amenities, and pricing."
```

### owner_questions

1. Please confirm the exact street address wording and whether any floor number should be included.
2. What are the exact opening and closing times for each day, including the afternoon break and Sunday hours?
3. Is `info@gravity9fitness.com` the current official business email?
4. Does the gym control `gravity9fitness.com`, and can the owner provide DNS/domain access if that domain will be used?
5. What is the current official WhatsApp number, if different from the main phone?
6. What are the exact daily, weekly, monthly, quarterly, six-month, annual, joining, and personal-training prices?
7. Which programs are currently active: strength training, cardio, personal training, Zumba, Vinyasa Yoga, CrossFit-style/functional training, or others?
8. If Zumba is active, are Wednesday and Thursday 7:00 PM–8:00 PM the current schedule?
9. Is there a swimming pool on the premises? Do not publish this feature unless confirmed.
10. Are lockers, showers, restrooms, free Wi-Fi, first aid, wheelchair-accessible entrance/exit, and wheelchair-accessible parking currently available?
11. What payment methods are accepted, and are there membership freeze/cancellation rules or minimum-age requirements?
12. What are the names, roles, approved photos, and verifiable qualifications/certifications of trainers?
13. What is the owner's name and what business history/story may be published?
14. Does an official Instagram or Facebook account exist under a different or recently created handle?
15. Please provide approved Instagram Reel URLs, if the owner wants individual social content included.
16. Please provide the final approved logo and high-resolution photos of the real facility and equipment.
17. Are the quoted reviews approved for use on the website, and is any additional consent needed for names or photos?
18. Are there real member transformation cases with explicit written consent and verified measurements? Do not publish transformation claims without evidence and consent.

## 16. EXCLUDED_BY_CONTRACT

```yaml
EXCLUDED_BY_CONTRACT:
  transformations:
    value: "No gym-specific transformation content is populated. The dossier reports no verified quantitative transformation cases."
    source: "Dossier p. 14"
    status: NOT_FOUND
  hero_copy_and_artwork:
    value: "Factory/template-layer content; not generated as part of this research package. Authentic high-resolution hero photography remains to be collected."
    source: "Factory-level exclusion rule; missing asset noted in dossier pp. 15 and 21"
    status: NOT_FOUND
  training_intelligence:
    value: null
    source: "Factory/template-layer content intentionally excluded"
    status: NOT_FOUND
  between_sessions_education:
    value: null
    source: "Factory/template-layer content intentionally excluded; research's educational content opportunities are not confirmed gym services"
    status: NOT_FOUND
  discount_percentages:
    value: null
    source: "No verified gym-specific discounts or promotional percentages reported"
    status: NOT_FOUND
  promotional_terms:
    value: null
    source: "No verified promotion terms reported"
    status: NOT_FOUND
  unsupported_health_nutrition_physiological_claims:
    value: "Do not turn generic fitness education opportunities or directory descriptions into gym-specific medical, nutrition, fat-loss, recovery, injury-prevention, posture-correction, or physiological claims."
    source: "Dossier pp. 10 and 13-14; factory normalization rules"
    status: INFERRED
  factory_section_headings_and_labels:
    value: "Website section headings and labels belong to the factory/template layer, not this gym-specific research source."
    source: "Factory-level exclusion rule"
    status: VERIFIED_OFFICIAL
```

## Production-use guardrails

- Treat `VERIFIED_OFFICIAL` as supported by the primary Google Business Profile visual anchor described in the report, not as a substitute for a fresh owner sign-off.
- Treat directory data as `PUBLICLY_REPORTED`, not as owner-confirmed truth.
- Do not publish final opening hours until the owner resolves the split-shift/continuous-hours conflict.
- Do not publish a swimming pool, Vinyasa Yoga, or CrossFit claim until directly confirmed.
- Do not estimate or publish gym membership prices from local market context.
- Do not invent Google Maps URLs, coordinates, social handles, Instagram Reel URLs, trainer names, qualifications, transformation data, or image URLs.
- Source report contains occasional strong confidence language; this package preserves the underlying evidence distinction and does not treat that wording alone as proof of owner confirmation.

## Source report reference index

1. PageNearby — https://pagenearby.com/hyderabad/banjara-hills/gravity-9-fitness-centre/
2. Joonsquare — https://www.joonsquare.com/gym-and-fitness-centre/gravity-9-fitness-center-hyderabad
3. Justdial — https://www.justdial.com/Hyderabad/Gravity-9-Fitness-Center-Beside-Lv-Prasad-Eye-Hospital-Banjara-Hills/040PXX40-XX40-181221121024-B6N6_BZDET
4. Magicpin — https://magicpin.in/Hyderabad/Banjara-Hills/Fitness/Gravity-9-Fitness-Center/store/7505a8
5. FITPASS — https://fitpass.co.in/studio/gravity-9-fitness-center-banjara-hills
6. Justdial category context — https://www.justdial.com/Hyderabad/Unisex-Gyms-in-Yousufguda/nct-11576125
7. Justdial CrossFit category context — https://www.justdial.com/Hyderabad/Crossfit-Gyms-For-Men-in-Yousufguda/nct-12151248
8. Moovit Road No. 2 context — https://moovitapp.com/index/en/public_transit-Road_No_2_Banjara_Hills-Hyderabad-site_150008254-5997
9. Moovit LV Prasad Eye Institute context — https://moovitapp.com/index/en/public_transit-L_V_Prasad_Eye_Institute-Hyderabad-site_148656173-5997
10. Business Bioscopes / landmark context — https://www.businessbioscopes.com/pvr-rk-cineplex-banjara-hills-hyderabad/
