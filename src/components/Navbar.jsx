import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-slate-800 px-4 md:px-6 py-4 shadow-sm border-b border-slate-200/80 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <img
            src="/favicon.svg" // Keep your logo or replace it
            alt="Logo"
            className="w-8 h-8 text-teal-600"
          />
          <span className="text-2xl font-bold tracking-tight text-slate-900">Insight Hub</span>
        </div>

        <ul className="hidden md:flex space-x-8 font-semibold text-slate-700">
          <li><a href="#" className="hover:text-teal-600 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-teal-600 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-teal-600 transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-teal-600 transition-colors">Blog</a></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="mt-4 space-y-3 md:hidden font-semibold text-slate-700">
          <li><a href="#" className="block hover:text-teal-600 transition-colors">Home</a></li>
          <li><a href="#" className="block hover:text-teal-600 transition-colors">About</a></li>
          <li><a href="#" className="block hover:text-teal-600 transition-colors">Contact</a></li>
          <li><a href="#" className="block hover:text-teal-600 transition-colors">Blog</a></li>
        </ul>
      )}
    </nav>
  );
}