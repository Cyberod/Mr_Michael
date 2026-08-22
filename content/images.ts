import type { StaticImageData } from "next/image";
import portrait from "@/assets/images/michael-ezeadichie-portrait.png";

/**
 * Image manifest. Every image is a **static import**, which is what makes
 * `next/image` fill in intrinsic width, height and a blur placeholder — so no
 * page can ship an image without dimensions, and none of them shift layout as
 * they load. Alt text lives beside the import rather than being retyped at each
 * usage site: the Stitch build described the same photo five different ways.
 *
 * Nothing here is fetched at runtime. The originals were served from
 * `lh3.googleusercontent.com/aida-public/…`, a Google-internal CDN with no
 * uptime guarantee; pristine copies are archived in `reference/assets/`.
 */

export type SiteImage = {
  src: StaticImageData;
  /** Describes the image for anyone who cannot see it. Pass `alt=""` at the
   *  usage site instead if the image is purely decorative there. */
  alt: string;
  /**
   * Largest width in CSS pixels this source can fill without visible
   * upscaling. Phase 3 layouts must not exceed it.
   */
  maxDisplayWidth: number;
};

/**
 * The one portrait we have. The Stitch build served this same 512x512 file from
 * five different CDN URLs across five pages — byte-identical, verified by
 * checksum. It is the site's only photograph of Michael and it is small: 512px
 * cannot fill a hero without going soft, so `maxDisplayWidth` caps it and the
 * Phase 3 hero is built around a portrait at portrait scale, not a full-bleed
 * background. Replacing this with the high-resolution photography requested in
 * SPEC §8 is a one-line change here.
 */
export const portraitImage: SiteImage = {
  src: portrait,
  alt: "Michael Onyeka Ezeadichie, wearing a navy suit and light blue shirt, against a white background.",
  maxDisplayWidth: 512,
};
