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
import EnchantedLaneA from './units/EnchantedLaneA';
import W51unitA from './units/W51unitA';
import W51unitB from './units/W51unitB';
import RuthA from './units/RuthA';
import RuthB from './units/RuthB';
import E9B from './units/E9B';
import E9A from './units/E9A';



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
        <Route path="/enchantedA" element={<EnchantedLaneA />} />
        <Route path="/W51unitA" element={<W51unitA />} />
        <Route path="/W51unitB" element={<W51unitB />} />
        <Route path="/RuthA" element={<RuthA />} />
        <Route path="/RuthB" element={<RuthB />} />
        <Route path="/E9B" element={<E9B />} />
        <Route path="/E9A" element={<E9A />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
