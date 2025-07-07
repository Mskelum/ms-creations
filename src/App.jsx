import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Site chrome */}
      <Navbar />

      {/* Wrap routes in <main> so the footer stays at the bottom */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
