import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Briefcase, Code } from 'lucide-react'

export default function Footer() {

  return <footer className="footer">
    <div className="wrap footer-main">
      <div>
        <Link to="/" className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span className="brand-name">Kaleido</span>
        </Link>
        <p className="footer-note">
          Good things happen when
          <br />people show up.
        </p>
      </div>
      <div className="footer-col">
        <span className="eyebrow">EXPLORE</span>
        <Link to="/events">All events</Link>
        <Link to="/about">Our story</Link>
        <Link to="/contact">Get in touch</Link>
      </div>
      <div className="footer-col">
        <span className="eyebrow">SAY HELLO</span>
        <a href="mailto:hello@kaleido.example">
          hello@kaleido.example
          <ArrowUpRight size={13} />
        </a>
        <div className="socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram">
            <Camera size={17} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <Briefcase size={17} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub">
            <Code size={17} />
          </a>
        </div>
      </div>
    </div>
    <div className="wrap footer-bottom">
      <span>© 2026 Kaleido. A city, in full colour.</span>
      <span>Go where the good things happen.</span>
    </div>
  </footer>
}
