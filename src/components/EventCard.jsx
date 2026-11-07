import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, CalendarDays } from 'lucide-react'
import { formatDate } from '../data/events'

export default function EventCard({ event, index = 0 }) {
  const imageFallback =
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80'

  return (
    <article
      className="event-card"
      style={{ '--delay': `${index * 55}ms` }}
    >
      <Link
        to={`/events/${event.id}`}
        className="event-image-wrap"
      >
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          onError={e => {
            e.currentTarget.src = imageFallback
          }}
        />
        <span className="image-category">{event.category}</span>
        <span className="image-arrow">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="event-card-body">
        <div className="event-meta">
          <span>
            <CalendarDays size={14} />
            {formatDate(event.date, {
              day: 'numeric',
              month: 'short'
            })}
          </span>
          <span>{event.price === 'Free' ? 'Free entry' : event.price}</span>
        </div>

        <Link
          to={`/events/${event.id}`}
          className="event-title"
        >
          {event.title}
        </Link>

        <p>{event.description}</p>

        <div className="event-location">
          <MapPin size={14} />
          {event.venue}
        </div>
      </div>
    </article>
  )
}
