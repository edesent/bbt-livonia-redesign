import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function SiteFooter() {
  return (
    <>
      <section className="footer-banner" aria-label="Bethel Baptist Church exterior">
        <Image
          className="footer-banner-image"
          src="/558836764_1267331415432650_2075568322709960148_n.jpg"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="footer-banner-overlay" />
        <div className="footer-banner-inner">
          <p className="eyebrow">Come Visit Us</p>
          <h2>We&apos;d love to see you on Sunday.</h2>
          <p>29475 Six Mile Rd. &middot; Livonia, MI 48152</p>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Image
            src="/bethel_baptist_church_transparent_purple.png"
            alt="Bethel Baptist Church"
            width={105}
            height={60}
          />
        </div>
        <address>
          <MapPin size={18} />
          29475 Six Mile Rd. Livonia, MI 48152
        </address>
        <a href="tel:17345253664">
          <Phone size={18} />
          (734) 525-3664
        </a>
      </footer>
    </>
  );
}
