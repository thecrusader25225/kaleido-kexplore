import { useEffect, useState } from 'react'

export default function Countdown({ date }) {

  const get = () => {

    const d = new Date(`${date}T09:00:00`).getTime() - Date.now();
    if (d <= 0) return null;
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor(d % 86400000 / 3600000),
      minutes: Math.floor(d % 3600000 / 60000),
      seconds: Math.floor(d % 60000 / 1000)
    }
  }

  const [left, setLeft] = useState(get)

  useEffect(() => {

    const t = setInterval(() => setLeft(get()), 1000);
    return () => clearInterval(t)
  }, [date])

  if (!left) return <span className="countdown-ended">Event is live</span>

  return <div className="countdown">
    {Object.entries(left).map(([k, v]) => <div key={k}>
      <strong>{String(v).padStart(2, '0')}</strong>
      <small>{k}</small>
    </div>)}
  </div>
}
