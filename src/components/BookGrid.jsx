import { Heart, ShoppingCart, Wallet, Calendar, Star } from "lucide-react";

function Rating({ value = 0 }) {
  const stars = Array.from({ length: 5 });
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < Math.round(value) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function BookCard({ book, onBorrow, onRent, onBuy, onWishlist }) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white/70 backdrop-blur overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-50">
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full border ${book.available ? "border-green-200 text-green-700 bg-green-50" : "border-amber-200 text-amber-700 bg-amber-50"}`}>
            {book.available ? "Available" : "Checked out"}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <Rating value={book.rating} />
          <span className="text-sm font-medium text-gray-900">${book.price.toFixed(2)}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => onBorrow(book)}
            className="inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <Calendar size={16} /> Borrow
          </button>
          <button
            onClick={() => onRent(book)}
            className="inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100"
          >
            <Wallet size={16} /> Rent ${book.rentPrice.toFixed(2)}
          </button>
          <button
            onClick={() => onBuy(book)}
            className="inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 col-span-2"
          >
            <ShoppingCart size={16} /> Buy Now
          </button>
          <button
            onClick={() => onWishlist(book)}
            className="inline-flex items-center justify-center gap-2 text-xs px-2 py-1 rounded-md text-pink-600 hover:bg-pink-50"
          >
            <Heart size={14} /> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BookGrid({ books = [], onBorrow, onRent, onBuy, onWishlist }) {
  if (!books.length) {
    return (
      <div className="text-center text-gray-600 py-12">No books match your filters.</div>
    );
  }
  return (
    <section id="browse" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((b) => (
        <BookCard
          key={b.id}
          book={b}
          onBorrow={onBorrow}
          onRent={onRent}
          onBuy={onBuy}
          onWishlist={onWishlist}
        />
      ))}
    </section>
  );
}
