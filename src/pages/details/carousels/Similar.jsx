/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {

    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    // console.log("mediaType - ",mediaType)


    return (
        <>
        {data?.results?.length > 0 ? (<Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
        />) : null}
        </>
    );
};

export default Similar;