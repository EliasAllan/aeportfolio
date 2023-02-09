// import logo from "./logo.svg";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="resume" element={<Resume/>} />
        </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
