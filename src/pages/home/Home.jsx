/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Upcoming from './upcoming/Upcoming';
import TvShows from './tvshows/TvShows';
import PopularPeople from './popularPeople/PopularPeople';


const Home = () => {

  return (
    <div className="homePage">
      <HeroBanner/>
      <Trending/>
      <Upcoming/>
      <Popular/>
      <TopRated/>
      {/* <TvShows/> */}
      <PopularPeople/>
    </div>
  )
}

export default Home