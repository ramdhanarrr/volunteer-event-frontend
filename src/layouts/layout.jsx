import Navbar from "../component/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-6">
        {children}
      </main>
    </div>
  );
}
