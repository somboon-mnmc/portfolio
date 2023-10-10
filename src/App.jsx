
import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import Home from "./components/Main/Home/Home";
import About from "./components/Main/About/About";
import Project from "./components/Main/Projects/Project";

function App() {
  return (
    <>
      <aside className="fixed w-20 h-full flex flex-col justify-center top-12 right-0 text-black z-10">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#project">PROJECT</a>
      </aside>
      <header className="top-0 relative">
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Project />
      </main>
    </>
  );
}

export default App;
