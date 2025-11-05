import { Rocket } from "lucide-react";

export default function Hero({ query, onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Your Digital Library, Anytime
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Discover, borrow, rent, or buy books in a modern, seamless experience.
            </p>
            <div className="mt-6 flex rounded-lg shadow-sm">
              <input
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                placeholder="Search by title, author, or keyword"
                className="flex-1 rounded-l-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => onSearch(query)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-r-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                <Rocket size={18} />
                <span>Search</span>
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Tip: Use filters below to refine by category, author, and availability.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-gray-100 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-600/10 text-blue-700 flex items-center justify-center">
                  <Rocket />
                </div>
                <p className="mt-4 text-gray-700 font-medium">Fast, simple, delightful</p>
                <p className="text-gray-500 text-sm">Beautiful UI with powerful features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
