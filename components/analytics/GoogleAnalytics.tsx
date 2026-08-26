import Script from "next/script";
import { analytics } from "@/content/site";

/**
 * Google Analytics 4, loaded once from the root layout so it covers every page.
 *
 * Google's own snippet is two raw <script> tags in <head>. Dropping those in
 * verbatim would make gtag.js render-blocking on first paint; `next/script`
 * with the default `afterInteractive` strategy loads the same two scripts
 * early but off the critical path, which is what both Next.js and Google's own
 * performance guidance recommend. The tag behaves identically — this is the
 * same thing @next/third-parties' GoogleAnalytics component does, without
 * adding a dependency to a project that has deliberately stayed lean.
 *
 * Development traffic is excluded. Left ungated, every hot reload and every
 * page you open while building the site lands in the client's reports and
 * quietly corrupts their first months of data.
 */
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production" || !analytics.measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`}
        strategy="afterInteractive"
      />
      {/* An inline Script needs an id so Next can dedupe it across navigations. */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analytics.measurementId}');`}
      </Script>
    </>
  );
}
