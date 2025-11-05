import { BookOpen, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-blue-600 text-white"><BookOpen size={20} /></div>
          <span className="text-lg font-semibold tracking-tight">E-Library</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#browse" className="hover:text-gray-900">Browse</a>
          <a href="#categories" className="hover:text-gray-900">Categories</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Search size={16} />
            <span className="text-sm">Quick Search</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            <User size={16} />
            <span className="text-sm">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
