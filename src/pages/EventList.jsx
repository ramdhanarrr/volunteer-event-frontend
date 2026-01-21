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
    return <p className="text-center">No events available</p>;

  return (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Volunteer Events
      </h1>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500"
          >
            <h2 className="font-semibold text-gray-800">
              {event.title}
            </h2>

            <p className="text-sm text-gray-500 mb-3">
              {event.event_date}
            </p>

            <Link
              to={`/events/${event.id}`}
              className="text-blue-600 font-medium text-sm"
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
