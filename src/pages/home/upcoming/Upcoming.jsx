/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import "../style.scss";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Upcoming = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/movie/upcoming`);
  

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Movies</span>
        <SwitchTabs data={["Upcoming"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  );
};

export default Upcoming;
