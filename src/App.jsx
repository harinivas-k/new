import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <a href="/" className="btn btn-dark">
                  Back to Home
                </a>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}