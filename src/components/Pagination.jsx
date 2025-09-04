export default function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <nav className="flex items-center justify-center gap-2 mt-10">
      <button className="btn" onClick={() => onPage(Math.max(1, page - 1))} disabled={page === 1}>Prev</button>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={[
            'btn !px-3.5', // Adjust padding for square-like look
            p === page ? 'btn-primary' : ''
          ].join(' ').trim()}
        >
          {p}
        </button>
      ))}
      <button className="btn" onClick={() => onPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}>Next</button>
    </nav>
  )
}