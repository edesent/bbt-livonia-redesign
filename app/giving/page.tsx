import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export const metadata: Metadata = {
  title: "Giving | Bethel Baptist Church",
  description:
    "Give online to support the ministry of Bethel Baptist Church in Livonia, Michigan.",
};

export default function GivingPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="section giving-page">
          <div className="giving-page-heading">
            <p className="eyebrow">Generosity</p>
            <h1>Give to the ministry of Bethel.</h1>
            <p>
              Thank you for partnering with us as we share the gospel and care for
              our church family. Online giving is processed securely through Vanco.
            </p>
          </div>
          <div className="giving-page-frame">
            <iframe
              src="https://secure.myvanco.com/L-Z32K/home"
              title="Bethel Baptist Church online giving"
              loading="lazy"
              allow="payment"
            />
          </div>
          <div className="embed-cta">
            <a
              className="button quiet"
              href="https://secure.myvanco.com/L-Z32K/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open giving page in a new tab <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
