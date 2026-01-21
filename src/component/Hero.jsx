import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl grid md:grid-cols-2 overflow-hidden">
        
        <div className="p-12 text-white">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Volunteer <br /> With Purpose
          </h1>

          <p className="text-blue-100 mb-8 max-w-md">
            Discover meaningful volunteer opportunities and make a real impact.
          </p>

          <a
            href="/events"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full"
          >
            Explore Events
          </a>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
