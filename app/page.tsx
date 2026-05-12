import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Church,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  Music2,
  Phone,
  PlayCircle,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = ["Visit", "Pastor", "Ministries", "Sermons", "Giving"];

const services = [
  {
    day: "Sunday",
    title: "Connect Groups",
    time: "10:00 AM",
    detail: "Age-group Bible classes before the morning gathering.",
  },
  {
    day: "Sunday",
    title: "Worship Service",
    time: "11:00 AM",
    detail: "Bible preaching, worship, and fellowship for the whole family.",
  },
  {
    day: "Wednesday",
    title: "Bible Study",
    time: "7:00 PM",
    detail: "Midweek encouragement with prayer and time in Scripture.",
  },
  {
    day: "Wednesday",
    title: "Master Club",
    time: "6:55-8:05 PM",
    detail: "A children's discipleship night running alongside Bible study.",
  },
];

const ministries = [
  {
    icon: UsersRound,
    title: "Adult Ministries",
    copy: "Classes, activities, and friendships centered on Scripture and steady encouragement.",
  },
  {
    icon: Music2,
    title: "Teen Ministries",
    copy: "A place for students to grow in faith, serve together, and build lasting friendships.",
  },
  {
    icon: HeartHandshake,
    title: "Children's Ministries",
    copy: "Safe, joyful Bible teaching for children during weekly classes and special activities.",
  },
];

export default function Home() {
  return (
    <>
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
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open navigation">
              <Menu size={22} />
            </summary>
            <div>
              {navItems.map((item) => (
                <a href={`#${item.toLowerCase()}`} key={item}>
                  {item}
                </a>
              ))}
            </div>
          </details>
        </nav>
      </header>

      <main>
        <section className="hero">
          <Image
            className="hero-image"
            src="/sanctuary-worship.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-inner">
            <p className="eyebrow">Loving God, Loving People</p>
            <h1>Bethel Baptist Church</h1>
            <p className="hero-copy">
              A church family in Livonia gathering for Bible preaching, worship,
              fellowship, and gospel-centered discipleship for every generation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#visit">
                Plan a Visit <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#sermons">
                Watch Online <PlayCircle size={18} />
              </a>
            </div>
          </div>
          <div className="service-ribbon" aria-label="Service times">
            <span>
              <Clock3 size={18} /> Sunday 10:00 AM and 11:00 AM
            </span>
            <span>
              <CalendarDays size={18} /> Wednesday 7:00 PM
            </span>
            <span>
              <MapPin size={18} /> Livonia, MI
            </span>
          </div>
        </section>

        <section className="section welcome">
          <div className="welcome-copy">
            <p className="eyebrow">A Place to Belong</p>
            <h2>Warm fellowship, clear Bible teaching, and a church home for your family.</h2>
            <p>
              Bethel is built around the weekly rhythm of worship, Bible study,
              discipleship, and serving one another. The redesign keeps the heart of
              the current site while giving visitors a clearer path to Sunday morning.
            </p>
          </div>
          <div className="photo-panel">
            <Image src="/church-family.jpeg" alt="" width={710} height={709} sizes="(max-width: 900px) 100vw, 36vw" />
          </div>
        </section>

        <section className="section pastor-section" id="pastor">
          <div className="pastor-portrait" aria-hidden="true">
            <span>PN</span>
          </div>
          <div className="pastor-copy">
            <p className="eyebrow">Meet Our Pastor</p>
            <h2>Pastor Name</h2>
            <p className="pastor-role">Senior Pastor</p>
            <p>
              Pastor placeholder bio goes here. This space can introduce his family,
              testimony, years of ministry, and heart for preaching the Bible and caring
              for the people of Bethel Baptist Church.
            </p>
            <p>
              Add a warm welcome note here for guests who are visiting for the first
              time, along with any personal details the church wants to highlight.
            </p>
          </div>
        </section>

        <section className="section services" id="visit">
          <div className="section-heading">
            <p className="eyebrow">Gather With Us</p>
            <h2>Service Times</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={`${service.day}-${service.title}`}>
                <span>{service.day}</span>
                <h3>{service.title}</h3>
                <p className="service-time">{service.time}</p>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section ministries" id="ministries">
          <div className="section-heading">
            <p className="eyebrow">Ways to Connect</p>
            <h2>Ministries for Every Season</h2>
          </div>
          <div className="ministry-grid">
            {ministries.map(({ icon: Icon, title, copy }) => (
              <article className="ministry-card" key={title}>
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section visit-panel">
          <div>
            <p className="eyebrow">Your First Sunday</p>
            <h2>Come as a guest. Leave knowing where to go next.</h2>
          </div>
          <div className="visit-list">
            <p>
              <Church size={20} /> Enter through the main doors and our church family
              will help you find Connect Groups, the auditorium, or children&apos;s classes.
            </p>
            <p>
              <BookOpenText size={20} /> Bring a Bible if you have one; Scripture will
              be central in every gathering.
            </p>
            <p>
              <UsersRound size={20} /> Stay after the service and meet people who are
              glad you came.
            </p>
          </div>
        </section>

        <section className="section action-band" id="sermons">
          <div>
            <p className="eyebrow">Livestream and Sermons</p>
            <h2>Follow along when you&apos;re away.</h2>
            <p>
              Services are streamed on the Bethel Baptist Livonia Facebook page, with
              sermon access kept prominent for returning visitors.
            </p>
          </div>
          <div className="action-buttons">
            <a className="button primary" href="https://www.facebook.com/bethelbaptistlivoniami">
              Facebook Live <PlayCircle size={18} />
            </a>
            <a className="button quiet" href="#giving" id="giving">
              Giving <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Image src="/bethel_baptist_church_transparent_purple.png" alt="Bethel Baptist Church" width={105} height={60} />
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
