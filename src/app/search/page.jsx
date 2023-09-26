import React from "react";
import Search from "@/sections/search_view.jsx";

import { searchMovie } from "@/api/moviesApi.js";

export default function SearchPage() {
  let data = [];

  const getData = async (query = "") => {
    data = await searchMovie(query);
  };

  return <Search data={data} getData={getData} />;
}
