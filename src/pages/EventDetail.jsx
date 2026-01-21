import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById, joinEvent } from "../services/api";
import Loading from "../component/Loading";
import ErrorMessage from "../component/ErrorMessage";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getEventById(id)
      .then(setEvent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  const handleJoin = async () => {
    const res = await joinEvent();
    setMessage(res);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-indigo-500">
          <h1 className="text-xl font-bold text-indigo-700 mb-1">
            {event.title}
          </h1>

          <p className="text-sm text-gray-500 mb-4">{event.event_date}</p>

          <p className="text-gray-700 mb-6">{event.description}</p>

          <button
            onClick={handleJoin}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Join Event
          </button>

          {message && (
            <p className="mt-4 text-center text-green-600 font-medium">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
