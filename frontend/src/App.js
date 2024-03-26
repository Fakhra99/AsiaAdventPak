// import './index.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import Rushlake from "./components/Home/Cards/ReadMore/Rushlake";
import RPBCT from "./components/Home/Cards/ReadMore/RPBCT";
import HunzaBlossomTour from "./components/Home/Cards/ReadMore/HunzaBlossomTour";
import ChilamJoshiFes from "./components/Home/Cards/ReadMore/ChilamJoshiFes";
import DJST from "./components/Home/Cards/ReadMore/DJST";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rushlake" element={<Rushlake />} />
        <Route path="/rpbct" element={<RPBCT />} />
        <Route path="/hbt" element={<HunzaBlossomTour />} />
        <Route path="/chilamjoshifes" element={<ChilamJoshiFes />}/>
        <Route path="/djst" element={<DJST />}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
