import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-6xl px-6 mx-auto">
      <div className="grid overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl md:grid-cols-2">
        <div className="p-12 text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            Relawan Bareng <br /> Jadi Lebih Bermakna
          </h1>

          <p className="max-w-md mb-8 text-blue-100">
            Temukan berbagai kegiatan seru dan mulai buat dampak positif buat
            sekitar kamu.
          </p>

          <Link
            to="/events"
            className="inline-block px-6 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50"
          >
            Cek Kegiatan
          </Link>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Volunteers shaking hands"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
