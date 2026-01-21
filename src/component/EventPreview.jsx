import { Link } from "react-router-dom";

const previews = [
  {
    title: "Beach Cleanup",
    tag: "Environment",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Tree Planting",
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Food Donation",
    tag: "Community",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    title: "Teaching Kids",
    tag: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
];

export default function EventPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {previews.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
        >
          <img src={item.image} className="h-40 w-full object-cover" />

          <div className="p-4">
            <span className="text-xs text-blue-600 font-medium">
              {item.tag}
            </span>

            <h3 className="font-semibold mt-2">{item.title}</h3>

            <a
              href="/events"
              className="text-blue-600 text-sm font-medium mt-3 inline-block"
            >
              View →
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
