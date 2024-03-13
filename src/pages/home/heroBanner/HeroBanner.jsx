/* eslint-disable no-unused-vars */
import React, { useState , useEffect} from 'react'
import "./style.scss";
import { useNavigate } from 'react-router'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import defaultHeroBanner from "../../../assets/defaultHeroBanner.jpeg"
import defaultHeroBanner1 from "../../../assets/defaultHeroBanner1.jpeg"
import defaultHeroBanner2 from "../../../assets/defaultHeroBanner2.jpeg"
import defaultHeroBanner3 from "../../../assets/defaultHeroBanner3.jpeg"
import defaultHeroBanner4 from "../../../assets/defaultHeroBanner4.jpeg"
import defaultHeroBanner5 from "../../../assets/defaultHeroBanner5.jpeg"
import defaultHeroBanner6 from "../../../assets/defaultHeroBanner6.jpeg"
import defaultHeroBanner7 from "../../../assets/defaultHeroBanner7.jpeg"
import defaultHeroBanner8 from "../../../assets/defaultHeroBanner8.jpeg"
import defaultHeroBanner9 from "../../../assets/defaultHeroBanner9.jpeg"
import defaultHeroBanner10 from "../../../assets/defaultHeroBanner10.jpeg"
import defaultHeroBanner11 from "../../../assets/defaultHeroBanner11.jpeg"
import defaultHeroBanner12 from "../../../assets/defaultHeroBanner12.jpeg"
import defaultHeroBanner13 from "../../../assets/defaultHeroBanner13.jpeg"

const HeroBanner = () => {

    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate();
    const { url } = useSelector((state)=>state.home)
    const {data , loading} = useFetch("/movie/upcoming")///movie/popular
    const defaultHeroBanners = [defaultHeroBanner
        ,defaultHeroBanner1
        ,defaultHeroBanner2
        ,defaultHeroBanner3
        ,defaultHeroBanner4
        ,defaultHeroBanner5
        ,defaultHeroBanner6
        ,defaultHeroBanner7
        ,defaultHeroBanner8
        ,defaultHeroBanner9
        ,defaultHeroBanner10
        ,defaultHeroBanner11
        ,defaultHeroBanner12
        ,defaultHeroBanner13]

    useEffect(()=>{
        const bg = url.backdrop ? url?.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path : defaultHeroBanners[Math.floor(Math.random()*defaultHeroBanners.length)]
        setBackground(bg)
        
    },[data])

    const searchQueryHandler = (event)=>{
        if(event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`)
        }
    }

  return (
        <div className="heroBanner">

        { !loading && <div className="backdrop">

                <Img src={background} />

        </div>}

        <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Millions of movies , TV shows and people to discover. Explore Now</span>
                    <div className="searchInput">
                        <input 
                        type="text"
                        placeholder='Search for a movie or TV show...'
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={query}
                         />
                         <button className='saerchButton'>Search</button>
                    </div>
                </div>
            </ContentWrapper>

        </div>
  )
}

export default HeroBanner