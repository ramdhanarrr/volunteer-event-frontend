import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto px-6 pt-6">
      <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-blue-600 text-lg">
          Volunteer
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="#">About</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/events"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium"
        >
          Join
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 bg-white rounded-xl shadow-md p-4 space-y-3">
          <Link to="/" className="block" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/events" className="block" onClick={() => setOpen(false)}>
            Events
          </Link>
          <Link to="#" className="block" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link
            to="/events"
            className="block text-center bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Join Event
          </Link>
        </div>
      )}
    </header>
  );
}
