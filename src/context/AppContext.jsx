import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AppContext = createContext(null)
export function AppProvider({ children }) {

  const [theme, setTheme] = useState(() => localStorage.getItem('ke-theme') || 'light')

  const [registrations, setRegistrations] = useState(() => JSON.parse(localStorage.getItem('ke-registrations') || '[]'))

  const [toast, setToast] = useState(null)

  useEffect(() => {

    document.documentElement.dataset.theme = theme;
    localStorage.setItem('ke-theme', theme)
  }, [theme])

  useEffect(() => {

    localStorage.setItem('ke-registrations', JSON.stringify(registrations))
  }, [registrations])

  useEffect(() => {

    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3400);
    return () => clearTimeout(t)
  }, [toast])

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(v => v === 'light' ? 'dark' : 'light'),
    registrations,
    addRegistration: r => setRegistrations(v => [...v, r]),
    toast,
    notify: (message, type = 'success') => setToast({
      message,
      type
    })
  }), [theme, registrations, toast])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export const useApp = () => useContext(AppContext)
