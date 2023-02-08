// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact/>} />
        </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
