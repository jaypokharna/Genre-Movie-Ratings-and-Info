/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  const [video, setVideo] = useState(null);

  useEffect(() => {
    let foundVideo = null;

    data?.results?.some((v) => {
      const lowerCaseName = v.name.toLowerCase();
      if (
        lowerCaseName === "official trailer" ||
        lowerCaseName.includes("trailer") ||
        lowerCaseName.includes("teaser")
      ) {
        setVideo(v);
        foundVideo = v;
        return true;
      }
      return false;
    });

    if (!foundVideo) {
      data?.results?.some((v) => {
        const lowerCaseName = v.name.toLowerCase();
        if (
          lowerCaseName.includes("promotion") ||
          lowerCaseName.includes("promo") ||
          lowerCaseName.includes("preview")
        ) {
          setVideo(v);
          foundVideo = v;
          return true;
        }
        return false;
      });
    }

    if (!foundVideo && data?.results?.length > 0) {
      setVideo(data.results[0]);
    }
  }, [data]);

  return (
    <div>
      <DetailsBanner video={video} crew={credits?.crew} />
      {credits?.cast.length > 0 ? <Cast data={credits?.cast} loading={creditsLoading} /> : null}
      {data?.results?.length > 0 ? <VideosSection data={data} loading={loading} /> : null}
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
