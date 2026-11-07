import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Ticket } from 'lucide-react'
import { events, formatDate } from '../data/events'
import { useApp } from '../context/AppContext'

export default function Register() {

  const { id } = useParams(),
    event = events.find(e => e.id === id),
    navigate = useNavigate(),
    { registrations, addRegistration, notify } = useApp()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  }),
    [errors, setErrors] = useState({}),
    [done, setDone] = useState(null),
    [submitting, setSubmitting] = useState(false)

  if (!event) return <main className="not-found wrap">
    <h1>
      Event not
      <br />
      <em>found.</em>
    </h1>
    <Link to="/events" className="button button-dark">Browse events</Link>
  </main>

  const update = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors(v => ({
      ...v,
      [e.target.name]: ''
    }))
  }

  const submit = e => {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!/^\+?[0-9\s()-]{8,15}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number (8–15 digits).';
    if (registrations.some(r => r.eventId === id && r.email.toLowerCase() === form.email.trim().toLowerCase())) next.email = 'This email is already registered for this event.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitting(true);
    const registration = {
      id: `KE-${Date.now().toString(36).toUpperCase()}`,
      eventId: id,
      eventTitle: event.title,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      createdAt: new Date().toISOString()
    };
    addRegistration(registration);
    setDone(registration);
    notify('Your registration is confirmed.');
    setSubmitting(false)
  }

  if (done) return <main className="registration-page">
    <div className="wrap confirmation-wrap">
      <div className="confirmation-card">
        <div className="confirmation-icon">
          <CheckCircle2 size={32} />
        </div>
        <span className="eyebrow">YOU'RE ON THE LIST</span>
        <h1>
          That's a
          <br />
          <em>good plan.</em>
        </h1>
        <p>
          Your registration for
          <strong>{event.title}</strong> is confirmed. We've saved your details in this browser.
        </p>
        <div className="confirmation-ticket">
          <div>
            <span>REGISTRATION ID</span>
            <strong>{done.id}</strong>
          </div>
          <div>
            <span>NAME</span>
            <strong>{done.name}</strong>
          </div>
          <div>
            <span>EVENT</span>
            <strong>{event.title}</strong>
          </div>
          <div>
            <span>DATE</span>
            <strong>{formatDate(event.date)}</strong>
          </div>
        </div>
        <Link to="/events" className="button button-dark">
          Explore more events
          <ArrowUpRight size={15} />
        </Link>
        <small className="demo-note">Demo project · This confirmation is stored locally on this device.</small>
      </div>
    </div>
  </main>

  return <main className="registration-page">
    <div className="wrap register-wrap">
      <Link to={`/events/${event.id}`} className="back-link">
        <ArrowLeft size={15} /> Back to event
      </Link>
      <div className="register-grid">
        <div className="register-info">
          <span className="eyebrow">ONE STEP CLOSER</span>
          <h1>
            Save your
            <br />
            <em>spot.</em>
          </h1>
          <p>Fill in the details and we'll save your place. No fuss, just good plans.</p>
          <div className="register-event">
            <img src={event.image} alt="" />
            <div>
              <span className="eyebrow">YOU'RE REGISTERING FOR</span>
              <strong>{event.title}</strong>
              <small>{formatDate(event.date)} · {event.time}</small>
            </div>
          </div>
          <div className="register-price">
            <Ticket size={16} />
            <span>{event.price === 'Free' ? 'Free registration' : `${event.price} per person`}</span>
          </div>
        </div>
        <form className="register-form" onSubmit={submit} noValidate>
          <span className="eyebrow">YOUR DETAILS</span>
          <h2>
            Let's get
            <br />you
            <em>in.</em>
          </h2>
          <label>
            Full name
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="e.g. Alex Morgan"
              autoComplete="name" />
            {errors.name && <small className="field-error">{errors.name}</small>}
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
              autoComplete="email" />
            {errors.email && <small className="field-error">{errors.email}</small>}
          </label>
          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="+91 98765 43210"
              autoComplete="tel" />
            {errors.phone && <small className="field-error">{errors.phone}</small>}
          </label>
          <label>
            Selected event
            <input value={event.title} readOnly className="readonly-input" />
          </label>
          <button type="submit" className="button button-dark button-full" disabled={submitting}>
            {submitting ? 'Saving your spot…' : 'Confirm registration'}
            <ArrowUpRight size={16} />
          </button>
          <p className="form-privacy">By registering, you agree to the event details shown above. Your details stay in this browser for this demo.</p>
        </form>
      </div>
    </div>
  </main>
}
