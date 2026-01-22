import { Link } from "react-router-dom";

const previews = [
  {
    title: "Bersih-Bersih Pantai",
    tag: "Lingkungan",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Tanam Pohon Bareng",
    tag: "Alam",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Donasi Makanan",
    tag: "Sosial",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    title: "Ngajar Anak-Anak",
    tag: "Edukasi",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
];

export default function EventPreview() {
  return (
    <section className="grid max-w-6xl grid-cols-1 gap-6 px-6 mx-auto sm:grid-cols-2 md:grid-cols-4">
      {previews.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1"
        >
          <img
            src={item.image}
            className="object-cover w-full h-40"
            alt={item.title}
          />

          <div className="p-4">
            <span className="bg-blue-50 text-blue-600 text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold">
              {item.tag}
            </span>

            <h3 className="mt-3 font-bold leading-snug text-gray-800">
              {item.title}
            </h3>

            <Link
              to="/events"
              className="flex items-center gap-1 mt-4 text-sm font-semibold text-blue-600 transition-all hover:gap-2"
            >
              Lihat Detail <span>→</span>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
