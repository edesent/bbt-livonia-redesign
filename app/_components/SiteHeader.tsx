import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Visit", href: "/#visit" },
  { label: "Pastor", href: "/#pastor" },
  { label: "Ministries", href: "/#ministries" },
  { label: "Events", href: "/#events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Giving", href: "/giving" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar">
        <span>29475 Six Mile Rd. Livonia, MI 48152</span>
        <a href="tel:17345253664">(734) 525-3664</a>
      </div>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">
            <Image
              src="/bethel_baptist_church_transparent_purple.png"
              alt="Bethel Baptist Church"
              width={234}
              height={133}
              priority
            />
          </span>
        </Link>
        <div className="desktop-nav">
          {navItems.map(({ label, href }) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <Menu size={22} />
          </summary>
          <div>
            {navItems.map(({ label, href }) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
