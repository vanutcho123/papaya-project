import React from "react";
import FilterComp from "../components/FilterComp";
import ListFilm from "../components/ListFilm";

const HomePage = () => {
  return (
    <div className="overflow-auto">
      <FilterComp />
      <ListFilm />
    </div>
  );
};

export default HomePage;
