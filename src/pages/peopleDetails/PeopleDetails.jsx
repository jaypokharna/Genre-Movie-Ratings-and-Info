/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Cast from "./cast/Cast";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import PeopleDetailsBanner from "./detailsBanner/PeopleDetailsBanner";

const PeopleDetails = () => {

  const { id } = useParams();

  const { data, loading } = useFetch(`/person/${id}/movie_credits`);
    const { data : tvData, loading : tvLoading } = useFetch(`/person/${id}/tv_credits`);

  return (
    <div>
      <PeopleDetailsBanner />
      <Similar mediaType={"movie"} data={data} loading={loading}/>
      <Similar mediaType={"tv"} data={tvData} loading={tvLoading}/>
    </div>
  );
};

export default PeopleDetails;
