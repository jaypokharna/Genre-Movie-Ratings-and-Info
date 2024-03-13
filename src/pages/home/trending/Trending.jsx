/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { fetchData } from "../../../utils/api";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import "../style.scss";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  

  const onTabChange = (tab, index) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
