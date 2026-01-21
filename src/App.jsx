import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
    </Routes>
  );
}
