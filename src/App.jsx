import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import BookGrid from "./components/BookGrid";

function useMockBooks() {
  const [books] = useState(() => [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-Help",
      available: true,
      price: 14.99,
      rentPrice: 2.99,
      rating: 4.8,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Technology",
      available: true,
      price: 29.99,
      rentPrice: 4.49,
      rating: 4.7,
      cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      available: false,
      price: 9.99,
      rentPrice: 1.99,
      rating: 4.5,
      cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "History",
      available: true,
      price: 19.99,
      rentPrice: 3.49,
      rating: 4.6,
      cover: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "5",
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Technology",
      available: false,
      price: 24.99,
      rentPrice: 3.99,
      rating: 4.9,
      cover: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "6",
      title: "Educated",
      author: "Tara Westover",
      category: "Memoir",
      available: true,
      price: 12.99,
      rentPrice: 2.49,
      rating: 4.3,
      cover: "https://images.unsplash.com/photo-1528208079124-a2387f039c61?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "7",
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      available: true,
      price: 16.99,
      rentPrice: 2.99,
      rating: 4.2,
      cover: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "8",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Psychology",
      available: true,
      price: 18.99,
      rentPrice: 3.19,
      rating: 4.4,
      cover: "https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=1200&auto=format&fit=crop",
    },
  ]);
  return books;
}

export default function App() {
  const books = useMockBooks();

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    author: "all",
    availability: "all",
  });
  const [toast, setToast] = useState(null);

  const categories = useMemo(() => Array.from(new Set(books.map((b) => b.category))), [books]);
  const authors = useMemo(() => Array.from(new Set(books.map((b) => b.author))), [books]);

  const filteredBooks = useMemo(() => {
    return books.filter((b) => {
      const matchesQuery = `${b.title} ${b.author} ${b.category}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = filters.category === "all" || b.category === filters.category;
      const matchesAuthor = filters.author === "all" || b.author === filters.author;
      const matchesAvailability =
        filters.availability === "all" ||
        (filters.availability === "available" && b.available) ||
        (filters.availability === "unavailable" && !b.available);
      return matchesQuery && matchesCategory && matchesAuthor && matchesAvailability;
    });
  }, [books, query, filters]);

  function notify(message) {
    setToast(message);
  }

  function onBorrow(book) {
    notify(`Borrow request placed for: ${book.title}`);
  }
  function onRent(book) {
    notify(`Rent checkout ready for: ${book.title} ($${book.rentPrice.toFixed(2)})`);
  }
  function onBuy(book) {
    notify(`Purchase checkout ready for: ${book.title} ($${book.price.toFixed(2)})`);
  }
  function onWishlist(book) {
    notify(`Added to wishlist: ${book.title}`);
  }

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <Hero query={query} onSearch={setQuery} />
      <Filters
        categories={categories}
        authors={authors}
        values={filters}
        onChange={setFilters}
      />
      <BookGrid
        books={filteredBooks}
        onBorrow={onBorrow}
        onRent={onRent}
        onBuy={onBuy}
        onWishlist={onWishlist}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="rounded-lg bg-gray-900 text-white/90 px-4 py-3 shadow-lg">
            <span className="text-sm font-medium">{toast}</span>
          </div>
        </div>
      )}

      <footer id="about" className="border-t border-gray-100 mt-8 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} E-Library. All rights reserved.</p>
          <p className="text-gray-500">Demo UI — Backend integration coming next.</p>
        </div>
      </footer>
    </div>
  );
}
