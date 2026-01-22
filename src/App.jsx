import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";
import About from "./pages/About";
import Layout from "./layouts/layout";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
      <Route
        path="/events"
        element={
          <Layout>
            <EventList />
          </Layout>
        }
      />
      <Route
        path="/events/:id"
        element={
          <Layout>
            <EventDetail />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </Routes>
  );
}
