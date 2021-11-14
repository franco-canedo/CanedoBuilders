import './App.css';
import Header from './containers/Header';
import { useEffect, useState } from 'react';
import Home from './containers/Home';
import Gallery from './containers/Gallery';
import CurrentProjects from './containers/CurrentProjects';
import About from './containers/About';
import Contact from './containers/Contact';
import Footer from './containers/Footer';



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
          return <Gallery toCurrent={toggleTab}/>
          
        case "current projects":
          return <CurrentProjects normal={"normal"}/>
          
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
      {tabDelivery()}
      <Footer />
    </div>
  );
}

export default App;
