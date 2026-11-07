import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import EventCard from '../components/EventCard'
import EventFilters from '../components/EventFilters'

export default function Events() {

  const [search, setSearch] = useState(''),
    [category, setCategory] = useState('All'),
    [sort, setSort] = useState('date'),
    [status, setStatus] = useState('upcoming')

  const filtered = useMemo(() => events.filter(e => {
    const q = search.toLowerCase();
    const matches = [
      e.title,
      e.category,
      e.venue,
      e.location,
      e.description
    ].some(v => v.toLowerCase().includes(q));
    const upcoming = new Date(`${e.date}T23:59:00`) > new Date();
    return matches && (category === 'All' || e.category === category) && (status === 'all' || (status === 'upcoming' ? upcoming : !upcoming))
  }).sort((a, b) => sort === 'name' ? a.title.localeCompare(b.title) : a.date.localeCompare(b.date)), [
    search,
    category,
    sort,
    status
  ])

  const clear = () => {
    setSearch('');
    setCategory('All');
    setSort('date');
    setStatus('upcoming')
  }

  return <main className="page-main">
    <section className="page-hero wrap">
      <span className="eyebrow">THE GOOD STUFF, ALL IN ONE PLACE</span>
      <h1>
        Make plans.
        <br />
        <em>Make memories.</em>
      </h1>
      <p>From big ideas to late nights. Find the event that gives your calendar a reason to exist.</p>
      <div className="page-hero-bottom">
        <span>
          <strong>{events.length}</strong> handpicked experiences
        </span>
        <span>
          BHUBANESWAR & BEYOND
          <ArrowUpRight size={14} />
        </span>
      </div>
    </section>
    <section className="wrap events-explorer">
      <div className="explorer-top">
        <div>
          <span className="eyebrow">BROWSE THE LINEUP</span>
          <h2>
            Find your
            <em>thing.</em>
          </h2>
        </div>
        <div className="status-tabs">
          <button className={status === 'upcoming' ? 'selected' : ''} onClick={() => setStatus('upcoming')}>Upcoming</button>
          <button className={status === 'all' ? 'selected' : ''} onClick={() => setStatus('all')}>All events</button>
          <button className={status === 'past' ? 'selected' : ''} onClick={() => setStatus('past')}>Past</button>
        </div>
      </div>
      <EventFilters {...{
        search,
        setSearch,
        category,
        setCategory,
        sort,
        setSort,
        clear,
        count: filtered.length
}
      } />
      {filtered.length ? <div className="event-grid">
        {filtered.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
      </div> : <div className="empty-state">
        <span className="empty-icon">✳</span>
        <h3>No events found.</h3>
        <p>Try a different search or clear your filters to see what's happening.</p>
        <button className="button button-dark" onClick={clear}>
          Clear filters
          <ArrowUpRight size={15} />
        </button>
      </div>}
    </section>
    <section className="mini-cta">
      <div className="wrap">
        <p>Have something worth sharing?</p>
        <Link to="/contact" className="text-link">
          Let's put it on the calendar
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  </main>
}
