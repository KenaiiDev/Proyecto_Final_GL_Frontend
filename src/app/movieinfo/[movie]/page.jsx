import React from "react";
import Movieinfo from "@/sections/movie_info_view.jsx";

import { getMovieById } from "@/api/moviesApi";

export default async function infoMovie({ params }) {
  const movie = await getMovieById(params.movie);

  return <Movieinfo data={movie} />;
}
