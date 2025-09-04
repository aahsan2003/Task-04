import { ArrowRight } from 'lucide-react';

export default function PostCard({ post }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="badge">{post.category}</span>
          <span className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h3 className="text-lg font-bold leading-tight text-slate-900 mb-2">{post.title}</h3>
        <p className="text-slate-600 text-sm flex-1">{post.excerpt}</p>
        <button className="btn btn-primary w-full mt-4 group">
          Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  )
}