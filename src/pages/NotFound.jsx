import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return <main className="not-found wrap">
    <span className="eyebrow">404 · WRONG TURN</span>
    <h1>
      Nothing to
      <br />
      <em>see here.</em>
    </h1>
    <p>Looks like this page wandered off.</p>
    <Link to="/" className="button button-dark">
      Back home
      <ArrowUpRight size={15} />
    </Link>
  </main>
}
