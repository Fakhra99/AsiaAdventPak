import React from 'react';
import Wallpapers from './Wallpapers/Wallpaper';
import Para from './Paragraphs/Para';
import Boxes from './Boxes/Boxes';
import Cards from './Cards/Cards'

const Home = () => {
  return (
    <div>
        <Wallpapers/>
        <Para/>
        <Boxes/>
        <Cards/>
    </div>
  )
}

export default Home