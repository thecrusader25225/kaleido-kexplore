import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const { theme, toggleTheme } = useApp()

  const links = [
    ['Home', '/'],
    ['Explore events', '/events'],
    ['About', '/about'],
    ['Contact', '/contact']
  ]

  return <header className="navbar">
    <div className="nav-inner wrap">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span className="brand-name">Kaleido</span>
      </Link>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, to]) => <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={() => setOpen(false)}>{label}</NavLink>)}
        <Link to="/events" className="nav-mobile-cta" onClick={() => setOpen(false)}>
          Find an event
          <ArrowUpRight size={15} />
        </Link>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <Link to="/events" className="button button-dark nav-cta">
          Explore events
          <ArrowUpRight size={15} />
        </Link>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  </header>
}
