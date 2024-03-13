/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import "../style.scss";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TvShows = () => {
  const [endPoint, setEndPoint] = useState("airing_today");

  const { data, loading } = useFetch(`/tv/${endPoint}`);
  

  const onTabChange = (tab, index) => {
    setEndPoint(tab === "Airing Today" ? "airing_today" : "on_the_air");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">TV Shows</span>
        <SwitchTabs data={["Airing Today", "On The Air"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  );
};

export default TvShows;
