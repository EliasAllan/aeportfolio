// import logo from "./logo.svg";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Resume from "./pages/Resume";
import { push as Menu } from "react-burger-menu";
import BurgerMenu from "./components/BurgerMenu";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <div id="outer-container">
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <BurgerMenu />
          </Menu>
          <Link to="/" id="myname"><span></span>Allan Elias</Link>
          <main id="page-wrap">
            <Routes>
              <Route path="/">
                <Route index element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="resume" element={<Resume />} />
              </Route>
            </Routes>
            <Footer />
          </main>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
