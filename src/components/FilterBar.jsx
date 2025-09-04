export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={[
            'btn !px-3 !py-1.5 !text-sm', // Smaller buttons
            active === cat ? 'bg-teal-600 text-white border-teal-600' : 'bg-white'
          ].join(' ').trim()}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}