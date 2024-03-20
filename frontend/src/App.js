import './index.css'
import Navbar from './components/navbar/Navbar';
import Wallpaper from './components/Wallpapers/Wallpaper';
import Para from './components/Paragraphs/Para';
import Boxes from './components/Boxes/Boxes';
import Cards from './components/Cards/Cards';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div>
     <Navbar/>
      <Wallpaper/>
      <Para/>
      <Boxes/>
      <Cards/>
      <Testimonials/>
    </div>
  );
}

export default App;
