/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchData } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResult/SearchResults";
import PeopleDetails from "./pages/peopleDetails/PeopleDetails";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiCongig();

    genresCall();

    return () => {};
  }, []);

  const fetchApiCongig = () => {
    // fetchData('/movie/popular')
    fetchData("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["movie", "tv"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    // console.log("gen",data[0].genres[1])

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/person/:id" element={<PeopleDetails />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
