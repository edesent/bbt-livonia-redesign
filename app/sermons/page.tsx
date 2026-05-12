import type { Metadata } from "next";
import { ArrowRight, PlayCircle } from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Sermons & Livestream | Bethel Baptist Church",
  description:
    "Watch live worship services and recent sermons from Bethel Baptist Church in Livonia, Michigan.",
};

export default function SermonsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="section sermons-page">
          <div className="sermons-copy">
            <p className="eyebrow">Sermons &amp; Livestream</p>
            <h1>Watch with us, wherever you are.</h1>
            <p>
              Our Sunday worship services and Wednesday Bible studies are streamed
              live on the Bethel Baptist Livonia Facebook page. Recent messages
              stay posted there so you can revisit a sermon or catch up on what you
              missed.
            </p>
            <p>
              Sunday worship begins at <strong>11:00 AM</strong> &middot; Wednesday
              Bible study at <strong>7:00 PM</strong>.
            </p>
            <div className="embed-cta sermons-cta">
              <a
                className="button primary"
                href="https://www.facebook.com/bethelbaptistlivoniami/live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch live on Facebook <PlayCircle size={18} />
              </a>
              <a
                className="button quiet"
                href="https://www.facebook.com/bethelbaptistlivoniami/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Past sermons <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="sermons-stream">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbethelbaptistlivoniami&tabs=timeline&width=500&height=920&hide_cover=true&show_facepile=false&small_header=true&adapt_container_width=true"
              title="Bethel Baptist Church recent sermons and livestreams"
              width={500}
              height={920}
              loading="lazy"
              scrolling="no"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
