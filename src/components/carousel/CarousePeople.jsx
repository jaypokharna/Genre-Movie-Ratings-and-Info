/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

import "./style.scss"
import KnownFor from "../knownFor/KnownFor";

const CarouselPeople = ({data , loading}) => {

    const carouselContainer = useRef();
    const {url} = useSelector((state)=>state.home)
    const navigate = useNavigate();

    const navigation = (dir)=>{

        const container = carouselContainer.current;
        const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20) 
        container.scrollTo({
            left : scrollAmount,
            behavior : "smooth"
        })
    }

    const skItem = ()=>{
        return(
            <div className="skeletonItem">
                <div className="posterBlock skeleton">
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="date skeleton"></div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={()=>navigation("left")}/>
            <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={()=>navigation("right")}/>
            {!loading ? (
            <div className="carouselItems" ref={carouselContainer}>
                    {data?.map((item)=>{
                        const posterUrl = item.profile_path ? url.poster + item.profile_path : PosterFallback
                        return(
                            <div className="carouselItem" key={item?.id} onClick={()=>navigate(`/person/${item.id}`)}>
                                <div className="posterBlock">
                                    <Img src={posterUrl}/>
                                    <KnownFor data={item.known_for}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item?.title || item?.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
            </div>
            ):(
                <div className="loadingSkeleton">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                </div>
            )
            }
        </ContentWrapper>
    </div>

  )
}

export default CarouselPeople