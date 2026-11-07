import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  }),
    [errors, setErrors] = useState({}),
    [sent, setSent] = useState(false),
    { notify } = useApp();
  const update = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setErrors(v => ({
      ...v,
      [e.target.name]: ''
    }))
  };
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (form.name.trim().length < 2) x.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) x.email = 'Enter a valid email.';
    if (!form.subject.trim()) x.subject = 'Please add a subject.';
    if (form.message.trim().length < 10) x.message = 'Message must be at least 10 characters.';
    setErrors(x);
    if (Object.keys(x).length) return;
    setSent(true);
    notify('Message validated. This demo does not send email.')
  };
  return <main className="contact-page">
    <section className="page-hero wrap">
      <span className="eyebrow">WE'RE EASY TO REACH</span>
      <h1>
        Have a good
        <br />
        <em>one to share?</em>
      </h1>
      <p>Questions, ideas, event submissions, or just a hello. We're listening.</p>
    </section>
    <section className="wrap contact-grid">
      <div className="contact-details">
        <div>
          <Mail />
          <span className="eyebrow">EMAIL</span>
          <a href="mailto:hello@kaleido.example">hello@kaleido.example</a>
        </div>
        <div>
          <MapPin />
          <span className="eyebrow">CURRENTLY EXPLORING</span>
          <strong>Bhubaneswar, India</strong>
        </div>
        <div className="contact-aside-note">The best things happen when people bring people together. If you're organising something, tell us about it.</div>
      </div>
      <div className="contact-form-wrap">
        {sent ? <div className="contact-success">
          <CheckCircle2 size={34} />
          <span className="eyebrow">MESSAGE READY</span>
          <h2>
            Thanks for
            <br />
            <em>reaching out.</em>
          </h2>
          <p>Your form passed validation. In this frontend demo, no email is actually sent.</p>
          <button className="button button-outline" onClick={() => {
            setSent(false);
            setForm({
              name: '',
              email: '',
              subject: '',
              message: ''
            })
}
          }>Send another message</button>
        </div> : <form className="contact-form" onSubmit={submit} noValidate>
          <span className="eyebrow">DROP US A LINE</span>
          <h2>
            What's on
            <br />your
            <em>mind?</em>
          </h2>
          <div className="form-two">
            <label>
              Your name
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Name" />
              {errors.name && <small className="field-error">{errors.name}</small>}
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="Email" />
              {errors.email && <small className="field-error">{errors.email}</small>}
            </label>
          </div>
          <label>
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={update}
              placeholder="What's this about?" />
            {errors.subject && <small className="field-error">{errors.subject}</small>}
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell us a little more…"
              rows="5" />
            {errors.message && <small className="field-error">{errors.message}</small>}
          </label>
          <button className="button button-dark" type="submit">
            Send message
            <ArrowUpRight size={16} />
          </button>
          <p className="form-privacy">Demo form only. No message is transmitted or stored.</p>
        </form>}
      </div>
    </section>
  </main>
}
