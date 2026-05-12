import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Church,
  Clock3,
  HeartHandshake,
  MapPin,
  Music2,
  PlayCircle,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import eventsData from "./data/events.json";

type ChurchEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

const events: ChurchEvent[] = eventsData;

function formatEventDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const monthShort = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return {
    month: monthShort.toUpperCase(),
    day: String(day).padStart(2, "0"),
    year,
  };
}

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
      <SiteHeader />

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
              <a className="button secondary" href="/sermons">
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
          <div className="pastor-portrait">
            <Image
              src="/477439082_1066798418819285_8203857255166104665_n.jpg"
              alt="Pastor Ryan Buja with his wife Gena and their sons Gabe, Andrew, Eli, and Micah"
              width={770}
              height={770}
              sizes="(max-width: 900px) 100vw, 36vw"
            />
          </div>
          <div className="pastor-copy">
            <p className="eyebrow">Meet Our Pastor</p>
            <h2>Pastor Ryan Buja</h2>
            <p className="pastor-role">Senior Pastor</p>
            <p>
              Pastor Ryan serves Bethel alongside his wife <strong>Gena</strong>,
              who also serves the church as our Church and Financial Secretary,
              and their four sons &mdash; Gabe, Andrew, Eli, and Micah.
            </p>
            <p>
              Whether you&apos;ve been walking with Christ for years or you&apos;re stepping
              into a church for the first time, the Buja family and the rest of the
              Bethel church family would love to welcome you on a Sunday morning.
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

        <section className="section events" id="events">
          <div className="section-heading">
            <p className="eyebrow">Upcoming Events</p>
            <h2>What&apos;s happening at Bethel</h2>
          </div>
          <div className="event-list">
            {events.map((event) => {
              const { month, day } = formatEventDate(event.date);
              return (
                <article className="event-card" key={`${event.date}-${event.title}`}>
                  <div className="event-date" aria-hidden="true">
                    <span className="event-month">{month}</span>
                    <span className="event-day">{day}</span>
                  </div>
                  <div className="event-body">
                    <h3>{event.title}</h3>
                    <p className="event-meta">
                      <Clock3 size={16} /> {event.time}
                      <span className="event-meta-sep" aria-hidden="true">
                        &middot;
                      </span>
                      <MapPin size={16} /> {event.location}
                    </p>
                    <p className="event-description">{event.description}</p>
                  </div>
                </article>
              );
            })}
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
      </main>

      <SiteFooter />
    </>
  );
}
