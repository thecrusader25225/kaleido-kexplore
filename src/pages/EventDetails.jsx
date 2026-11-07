import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, MapPin, Ticket, Users, Check } from 'lucide-react'
import { events, formatDate } from '../data/events'
import Countdown from '../components/Countdown'

export default function EventDetails() {

  const { id } = useParams(),
    event = events.find(e => e.id === id)

  if (!event) return <main className="not-found wrap">
    <span className="eyebrow">404 · EVENT NOT FOUND</span>
    <h1>
      This one's
      <br />
      <em>off the calendar.</em>
    </h1>
    <p>That event doesn't exist or may have moved.</p>
    <Link to="/events" className="button button-dark">
      Back to events
      <ArrowUpRight size={15} />
    </Link>
  </main>

  const past = new Date(`${event.date}T23:59:00`) < new Date()

  return <main className="detail-page">
    <div className="wrap detail-breadcrumb">
      <Link to="/events">
        <ArrowLeft size={15} /> All events
      </Link>
      <span>EVENT / {event.category.toUpperCase()}</span>
    </div>
    <section className="wrap detail-hero">
      <div className="detail-cover">
        <img src={event.image} alt={event.title} />
        <span className="detail-cover-tag">{event.category}</span>
      </div>
      <div className="detail-intro">
        <span className="eyebrow">{event.organizer.toUpperCase()} PRESENTS</span>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <div className="detail-meta-list">
          <div>
            <CalendarDays />
            <span>
              <small>DATE</small>
              <strong>{formatDate(event.date, {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</strong>
            </span>
          </div>
          <div>
            <Clock3 />
            <span>
              <small>TIME</small>
              <strong>{event.time} – {event.endTime}</strong>
            </span>
          </div>
          <div>
            <MapPin />
            <span>
              <small>VENUE</small>
              <strong>{event.venue}, {event.location}</strong>
            </span>
          </div>
        </div>
        <div className="detail-action-row">
          <Link to={past ? '#' : '/register/' + event.id} className={`button button-dark ${past ? 'disabled' : ''}`}>
            {past ? 'Event has ended' : 'Register your spot'}
            <ArrowUpRight size={16} />
          </Link>
          <span>{event.price === 'Free' ? 'Free entry' : event.price + ' / person'}</span>
        </div>
      </div>
    </section>
    <section className="wrap detail-content">
      <div className="detail-main">
        <span className="eyebrow">THE EXPERIENCE</span>
        <h2>
          A little more
          <br />
          <em>about it.</em>
        </h2>
        <p className="detail-description">{event.fullDescription}</p>
        <div className="highlights">
          <h3>What to expect</h3>
          {event.highlights.map(h => <div key={h}>
            <Check size={16} />{h}
          </div>)}
        </div>
        <div className="agenda">
          <h3>The plan</h3>
          {event.agenda.map(([time, label], i) => <div className="agenda-row" key={time}>
            <span>{time}</span>
            <strong>{label}</strong>
            <span className="agenda-index">0{i + 1}</span>
          </div>)}
        </div>
      </div>
      <aside className="detail-aside">
        <div className="aside-card">
          <span className="eyebrow">SAVE YOUR SPOT</span>
          <h3>{past ? 'This event has wrapped.' : 'Be part of it.'}</h3>
          <p>{past ? 'Keep exploring to find your next experience.' : 'A good experience is better shared. Get your name on the list.'}</p>
          {!past && <>
            <div className="aside-info">
              <span>
                <Users size={15} /> {event.seats} spots available
              </span>
              <span>
                <Ticket size={15} /> {event.price === 'Free' ? 'Free entry' : event.price}
              </span>
            </div>
            <Link to={`/register/${event.id}`} className="button button-dark button-full">
              Register now
              <ArrowUpRight size={16} />
            </Link>
          </>}
          <Link to="/events" className="aside-back">
            Explore other events
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="aside-countdown">
          <span className="eyebrow">TIME UNTIL THE DAY</span>
          {past ? <strong>See you next time.</strong> : <Countdown date={event.date} />}
        </div>
      </aside>
    </section>
  </main>
}
