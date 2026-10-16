/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * GRAVITY 9 FITNESS CENTRE Instagram configuration.
 *
 * docs/Gym-research.md INSTAGRAM.profile_url, INSTAGRAM.handle and
 * INSTAGRAM.items are all NOT_FOUND / empty: no verified official profile or
 * Reel URLs were established, and the research warns against inventing them.
 * `profileUrl`, `handle` and `items` are therefore deliberately left unset /
 * empty. The Instagram section renders nothing for an empty `items` array
 * and the footer Instagram link is omitted.
 * OWNER QUESTIONS: official Instagram profile URL/handle, and any approved
 * Reel URLs to embed.
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [],
};