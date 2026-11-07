import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, Heart, Users } from 'lucide-react'

export default function About() {
  return <main className="about-page">
    <section className="page-hero wrap about-hero">
      <span className="eyebrow">A NOTE FROM US</span>
      <h1>
        Less scrolling.
        <br />
        <em>More living.</em>
      </h1>
      <p>Kaleido is a home for the things happening around you — and the people you'll meet when you go.</p>
    </section>
    <section className="about-image wrap">
      <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=90" alt="People connecting at an event" />
      <span>GOOD PEOPLE. GOOD IDEAS. GOOD TIMES.</span>
    </section>
    <section className="section-pad">
      <div className="wrap about-story">
        <div>
          <span className="eyebrow">THE IDEA</span>
          <h2>
            A city is only
            <br />as good as the
            <br />
            <em>stories inside it.</em>
          </h2>
        </div>
        <div>
          <p className="story-lede">We started Kaleido with a simple thought: finding something interesting to do shouldn't feel like work.</p>
          <p>Great events are happening all the time — workshops, gigs, conversations, exhibitions, runs, and little gatherings that turn into big memories. But they're easy to miss when they're scattered across a dozen feeds and group chats.</p>
          <p>We're building a clearer way to discover them. A considered shortlist of experiences, made for curious people who would rather be there than hear about it later.</p>
        </div>
      </div>
    </section>
    <section className="values-section">
      <div className="wrap">
        <span className="eyebrow">WHAT WE BELIEVE</span>
        <h2>
          Three things we
          <br />
          <em>keep coming back to.</em>
        </h2>
        <div className="values-grid">
          <article>
            <Compass />
            <span>01 / DISCOVERY</span>
            <h3>Stay curious.</h3>
            <p>The best plans are sometimes the ones you didn't know you were looking for.</p>
          </article>
          <article>
            <Users />
            <span>02 / COMMUNITY</span>
            <h3>Find your people.</h3>
            <p>Shared interests make good introductions. Showing up makes them real.</p>
          </article>
          <article>
            <Heart />
            <span>03 / INTENTION</span>
            <h3>Make it count.</h3>
            <p>We value thoughtful experiences over endless options. Less noise, more meaning.</p>
          </article>
        </div>
      </div>
    </section>
    <section className="about-bottom">
      <div className="wrap">
        <span className="eyebrow">THERE'S ROOM FOR YOU</span>
        <h2>
          Come see
          <br />what's
          <em>on.</em>
        </h2>
        <Link to="/events" className="button button-light">
          Explore events
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  </main>
}
