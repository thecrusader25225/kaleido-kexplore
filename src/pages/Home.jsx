import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles, Ticket, Users, CalendarDays } from 'lucide-react'
import { events } from '../data/events'
import EventCard from '../components/EventCard'
import Countdown from '../components/Countdown'

export default function Home() {

  const featured = events.filter(e => e.featured).slice(0, 3),
    next = events.filter(e => new Date(`${e.date}T23:59:00`) > new Date()).sort((a, b) => a.date.localeCompare(b.date))[0]

  return <>
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="live-dot" /> A FIELD GUIDE TO GOING OUT
          <span className="kicker-line" />
        </div>
        <h1>
          Your city,
          <br />
          <em>in full colour.</em>
        </h1>
        <p className="hero-lede">A handpicked mix of rooms to walk into, ideas to bump into, and people you have not met yet. Make a plan worth remembering.</p>
        <div className="hero-buttons">
          <Link to="/events" className="button button-dark">
            Find your next plan
            <ArrowUpRight size={16} />
          </Link>
          <Link to="/about" className="text-link">
            The Kaleido point of view
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="hero-foot">
          <div className="avatar-stack">
            <span>J</span>
            <span>A</span>
            <span>M</span>
            <span>+</span>
          </div>
          <span>Good company, great experiences.</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=90" alt="Crowd enjoying a live event" />
          <div className="photo-overlay" />
          <div className="hero-photo-caption">
            <span>THE CITY IS YOURS</span>
            <strong>Make a night of it.</strong>
          </div>
        </div>
        <div className="floating-note">
          <Sparkles size={15} />
          <span>
            Something good
            <br />
            <strong>is happening.</strong>
          </span>
        </div>
        <div className="hero-stamp" aria-label="Kaleido, 2026">
          K
          <br />
          <span>2026</span>
        </div>
      </div>
      <a className="scroll-cue" href="#featured">
        <ArrowDown size={15} /> SCROLL TO EXPLORE
      </a>
    </section>

    <section className="featured-section section-pad" id="featured">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE KALEIDO EDIT</span>
            <h2>
              Put this on
              <br />your
              <em>calendar.</em>
            </h2>
          </div>
          <Link to="/events" className="text-link">
            All events
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="event-grid featured-grid">
          {featured.map((e, i) => <EventCard event={e} index={i} key={e.id} />)}
        </div>
      </div>
    </section>

    <section className="countdown-band">
      <div className="wrap countdown-inner">
        <div>
          <span className="eyebrow">UP NEXT · {next.category.toUpperCase()}</span>
          <h2>{next.title}</h2>
          <p>{next.description}</p>
        </div>
        <div className="countdown-side">
          <span className="countdown-label">THE COUNTDOWN IS ON</span>
          <Countdown date={next.date} />
          <Link to={`/events/${next.id}`} className="text-link">
            Get the details
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>

    <section className="manifesto section-pad">
      <div className="wrap manifesto-grid">
        <div className="manifesto-aside">
          <span className="eyebrow">THE KALEIDO IDEA</span>
          <div className="manifesto-number">
            01
            <span> / 03</span>
          </div>
        </div>
        <div>
          <h2>
            The best bits
            <br />happen
            <em>out there.</em>
          </h2>
          <p>We think the best parts of a city aren't found scrolling. They're found in a room full of strangers, at the front of a stage, or around a table where an idea becomes something real.</p>
          <Link to="/about" className="button button-outline">
            A little about us
            <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="manifesto-image">
          <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85" alt="Friends gathered around a table" />
          <span>
            MAKE ROOM FOR
            <br />THE UNEXPECTED.
          </span>
        </div>
      </div>
    </section>

    <section className="stats-section">
      <div className="wrap stats-grid">
        <div>
          <span className="eyebrow">A GROWING COMMUNITY</span>
          <h2>
            More than just
            <br />
            <em>something to do.</em>
          </h2>
        </div>
        <div className="stat">
          <strong>
            12
            <span>+</span>
          </strong>
          <span>Curated events</span>
        </div>
        <div className="stat">
          <strong>06</strong>
          <span>Ways to explore</span>
        </div>
        <div className="stat">
          <strong>01</strong>
          <span>City to start with</span>
        </div>
      </div>
    </section>

    <section className="home-cta section-pad">
      <div className="wrap cta-card">
        <div className="cta-orbit">
          K
          <span>.</span>
        </div>
        <span className="eyebrow">YOUR NEXT DETOUR</span>
        <h2>
          Don't just hear
          <br />about it
          <em>later.</em>
        </h2>
        <p>Pick a door. See what happens.</p>
        <Link to="/events" className="button button-light">
          See what is on
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  </>
}
