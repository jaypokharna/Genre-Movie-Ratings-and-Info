/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import Carousel from "../../../components/carousel/Carousel";

const Similar = ({ mediaType , data , loading}) => {


    const title = mediaType === "tv" ? "Played in TV Shows" : "Played in Movies";

    console.log("data - ",data)
    console.log("tvData - ",data)


    return (
        <>
        {data?.cast?.length > 0 ? (<Carousel
            title={title}
            data={data?.cast}
            loading={loading}
            endPoint={mediaType}
        />) : null}
        </>
    );
};

export default Similar;