import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="max-w-6xl px-6 pt-6 mx-auto">
      <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-sm">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-tight text-blue-600">
          Volunteer.id
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <Link to="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link to="/events" className="transition-colors hover:text-blue-600">
            Kegiatan
          </Link>
          <Link to="#" className="transition-colors hover:text-blue-600">
            Tentang Kami
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/events"
          className="hidden px-6 py-2 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full md:inline-block hover:bg-blue-700"
        >
          Gabung Sekarang
        </Link>

        {/* Mobile Button */}
        <button
          className="text-gray-600 md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="p-6 mt-3 space-y-4 bg-white border border-gray-100 shadow-xl md:hidden rounded-2xl">
          <Link
            to="/"
            className="block font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/events"
            className="block font-medium"
            onClick={() => setOpen(false)}
          >
            Kegiatan
          </Link>
          <Link
            to="#"
            className="block font-medium"
            onClick={() => setOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            to="/events"
            className="block py-3 font-bold text-center text-white bg-blue-600 rounded-xl"
            onClick={() => setOpen(false)}
          >
            Daftar Jadi Relawan
          </Link>
        </div>
      )}
    </header>
  );
}
