/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import "./style.scss";

const KnownFor = ({ data }) => {
    const slicedData = data.slice(0,2)

  return <div className="genres">
    {slicedData?.map((g)=>{
        return(
            <div key={g.id} className="knownMovie">
                    {g.title || g.name}
            </div>
        )
    })}
  </div>;
};

export default KnownFor;
