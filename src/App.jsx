import { useMemo, useState, useEffect } from 'react';
import PostCard from './components/PostCard.jsx';
import FilterBar from './components/FilterBar.jsx';
import Pagination from './components/Pagination.jsx';
import Navbar from "./components/Navbar.jsx";
import { posts as allPosts, CATEGORIES } from './data.js'; // <-- Import new data

export default function App() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(1);

  const visible = useMemo(() => {
    const byCategory = category === 'All' ? allPosts : allPosts.filter(p => p.category === category);
    const byQuery = query.trim()
      ? byCategory.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : byCategory;
    return byQuery.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(visible.length / perPage));
  const pagePosts = visible.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);


  function handleCategoryChange(next) {
    setCategory(next);
    setPage(1);
  }
  function handleSearch(e) {
    setQuery(e.target.value);
    setPage(1);
  }
  function handlePerPage(e) {
    setPerPage(Number(e.target.value));
    setPage(1);
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <header className="bg-slate-100 border-b border-slate-200">
        <div className="container-narrow py-12 md:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Welcome to Insight Hub
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Exploring Tech, Creativity, and Modern Wellbeing.
          </p>
          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="search"
              value={query}
              onChange={handleSearch}
              placeholder="Search posts..."
              className="input md:col-span-2"
              aria-label="Search posts"
            />
            <div className="flex items-center gap-2 justify-center">
              <label htmlFor="perPage" className="text-sm font-medium text-slate-700">Posts per page</label>
              <select id="perPage" value={perPage} onChange={handlePerPage} className="select">
                {[3, 6, 9, 12].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-8">
            <FilterBar categories={CATEGORIES} active={category} onChange={handleCategoryChange} />
          </div>
        </div>
      </header>

      <main className="container-narrow py-8 md:py-12 flex-1">
        {pagePosts.length === 0 ? (
          <p className="text-center text-slate-500 py-12 text-lg">No posts found. Try a different search or category.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map(p => <PostCard key={p.id} post={p} />)}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} onPage={setPage} />
      </main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="container-narrow py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-white mb-3">Insight Hub</h2>
            <p className="text-sm leading-6 text-slate-400">
              A curated space for modern ideas, creative inspiration, and guides for living well in a digital world.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Site Map</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400">Home</a></li>
              <li><a href="#" className="hover:text-teal-400">About</a></li>
              <li><a href="#" className="hover:text-teal-400">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400">Tech Trends</a></li>
              <li><a href="#" className="hover:text-teal-400">Creativity</a></li>
              <li><a href="#" className="hover:text-teal-400">Wellbeing</a></li>
              <li><a href="#" className="hover:text-teal-400">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400">Twitter</a></li>
              <li><a href="#" className="hover:text-teal-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-teal-400">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="container-narrow py-5 flex justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Insight Hub. All rights reserved.</p>
            <p>Designed with care.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}