import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../services/api";
import Loading from "../component/Loading";
import ErrorMessage from "../component/ErrorMessage";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch(() => {
        setError("Failed to load events");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (events.length === 0)
    return <p className="text-center">Belum ada acara apapun nih...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md p-4 mx-auto">
        <h1 className="mb-6 text-2xl font-bold text-center text-blue-700">
          Volunteer Events
        </h1>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 bg-white border-l-4 border-blue-500 shadow-md rounded-xl"
            >
              <h2 className="font-semibold text-gray-800">{event.title}</h2>

              <p className="mb-3 text-sm text-gray-500">{event.event_date}</p>

              <Link
                to={`/events/${event.id}`}
                className="text-sm font-medium text-blue-600"
              >
                Lihat Detail →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
