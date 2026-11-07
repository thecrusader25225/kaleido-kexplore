import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories } from '../data/events'

export default function EventFilters({ search, setSearch, category, setCategory, sort, setSort, clear, count }) {

  return <div className="filter-panel">
    <div className="search-field">
      <Search size={18} />
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search events, venues, or topics…"
        aria-label="Search events" />
      {search && <button onClick={() => setSearch('')} aria-label="Clear search">
        <X size={16} />
      </button>}
    </div>
    <div className="filter-bottom">
      <div className="category-pills">
        {categories.map(c => <button key={c} className={category === c ? 'category-pill active' : 'category-pill'} onClick={() => setCategory(c)}>{c}</button>)}
      </div>
      <div className="sort-wrap">
        <SlidersHorizontal size={15} />
        <select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort events">
          <option value="date">Date: soonest</option>
          <option value="name">Name: A–Z</option>
        </select>
        <button className="clear-filter" onClick={clear}>Clear</button>
      </div>
    </div>
    <div className="results-count">
      Showing
      <strong>{count}</strong> events
    </div>
  </div>
}
