import { Filter } from "lucide-react";

export default function Filters({
  categories = [],
  authors = [],
  values,
  onChange,
}) {
  return (
    <section id="categories" className="border-y border-gray-100 bg-white/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <Filter size={18} />
          <span className="font-medium">Filters</span>
        </div>
        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <select
            value={values.category}
            onChange={(e) => onChange({ ...values, category: e.target.value })}
            className="w-full md:w-56 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={values.author}
            onChange={(e) => onChange({ ...values, author: e.target.value })}
            className="w-full md:w-56 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Authors</option>
            {authors.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          <select
            value={values.availability}
            onChange={(e) => onChange({ ...values, availability: e.target.value })}
            className="w-full md:w-56 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Any Availability</option>
            <option value="available">Available Only</option>
            <option value="unavailable">Currently Unavailable</option>
          </select>
        </div>
      </div>
    </section>
  );
}
