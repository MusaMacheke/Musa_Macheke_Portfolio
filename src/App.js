import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import Feedback from "./Components/Feedback";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import './App.css';  // Ensure this CSS file includes the theme styles

function App() {
  const [Loading, SetLoading] = useState(true);
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader
            color={'#0085d7'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav toggleTheme={toggleTheme} theme={theme} />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Feedback" element={<Feedback />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
