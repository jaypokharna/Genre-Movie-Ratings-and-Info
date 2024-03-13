/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import "../style.scss";
import useFetch from "../../../hooks/useFetch";
import CarouselPeople from "../../../components/carousel/CarousePeople";

const PopularPeople = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/person/popular`);
  

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Celebrities"]} />
      </ContentWrapper>
      <CarouselPeople data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  );
};

export default PopularPeople;
