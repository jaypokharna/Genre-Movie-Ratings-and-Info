/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import Genres from "../../../components/genres/Genres.jsx";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";

const PeopleDetailsBanner = ({ personMovieData }) => {
  // console.log("Video - ",video)

  
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const { id } = useParams();
  const { data, loading } = useFetch(`/person/${id}`);
  const { data : socialData, socialLoading } = useFetch(`/person/${id}/external_ids`);

  const { url } = useSelector((state) => state.home);

  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div>
                <div className="backdrop-img">
                  <Img src={url?.backdrop + data?.profile_path} />
                </div>
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.profile_path ? (
                      <Img
                        src={url?.backdrop + data?.profile_path}
                        className="posterImg"
                      />
                    ) : (
                      <Img src={PosterFallback} className="posterImg" />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">{` ${
                      data?.name || data?.title
                    }`}</div>
                    <div className="subtitle">{`Gender: ${data?.gender === 1 ? ("Female") : ("Male")}`}</div>

                    <div className="overview">
                      <div className="heading">Bio</div>
                      <div className="description">{data?.biography}</div>
                    </div>
                    <div className="info">
                      <div className="status">
                        {data?.birthday && (
                          <div className="infoItem">
                            <span className="text bold">Birthday: </span>
                            <span className="text">{data?.birthday}</span>
                          </div>
                        )}
                        {data?.birthday && (
                          <div className="infoItem">
                            <span className="text bold">Age: </span>
                            <span className="text">
                              {calculateAge(data?.birthday)}
                            </span>
                          </div>
                        )}
                        {data?.place_of_birth && (
                          <div className="infoItem">
                            <span className="text bold">Birth Place: </span>
                            <span className="text">
                              {data?.place_of_birth}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {data?.known_for_department && (
                      <div className="info">
                        <span className="text bold">Proffession: </span>
                        <span className="text">
                          <span>
                              {data?.known_for_department}
                            </span>
                        </span>
                      </div>
                    )}
                     {socialData?.instagram_id && (
                      <div className="info">
                        <span className="text bold">Instagram: </span>
                        <span className="text">
                          <span>
                             <a className="socialMedia" href={`https://www.instagram.com/${socialData?.instagram_id}`}>{`/${socialData?.instagram_id}`}</a>
                            </span>
                        </span>
                      </div>
                    )}
                    {socialData?.imdb_id && (
                      <div className="info">
                        <span className="text bold">IMDB: </span>
                        <span className="text">
                          <span>
                             <a className="socialMedia" href={`https://www.imdb.com/name/${socialData?.imdb_id}/`}>{`${data.name}`}</a>
                            </span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default PeopleDetailsBanner;
