import './App.css';
import Header from './containers/Header';
import { useEffect, useState } from 'react';
import Home from './containers/Home';
import Gallery from './containers/Gallery';
import CurrentProjects from './containers/CurrentProjects';
import About from './containers/About';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

import ProspectA from './units/ProspectA';
import BuncheA from './units/BuncheA';
import BuncheB from './units/BuncheB';
import EastA from './units/2102A';
import EastB from './units/2102B';
import BrentA from './units/BrentwoodA';
import BrentB from './units/BrentwoodB';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [tab, setTab] = useState("home");

  const toggleTab = (selectedTab) => {
    setTab(selectedTab);
  }

  const tabDelivery = () => {
    switch (tab) {
      case "home":
        return <Home
          toPage={toggleTab}

        />

      case "gallery":
        return <Gallery toCurrent={toggleTab} />

      case "current projects":
        return <CurrentProjects normal={"normal"} />

      case "about":
        return <About />

      case "contact":
        return <Contact />

      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Header toggleTab={toggleTab} />
      {/* {tabDelivery()} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/listings" element={<CurrentProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prospect" element={<ProspectA />} />
        <Route path="/buncheA" element={<BuncheA />} />
        <Route path="/buncheB" element={<BuncheB />} />
        <Route path="/eastA" element={<EastA />} />
        <Route path="/eastB" element={<EastB />} />
        <Route path="/brentA" element={<BrentA />} />
        <Route path="/brentB" element={<BrentB />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
