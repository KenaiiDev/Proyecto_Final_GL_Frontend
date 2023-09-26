import React from "react";
import HomeView from "@/sections/home_view";

import { getMovies } from "@/api/moviesApi";

export default async function PrincipalPage({ params }) {
  const data = await getMovies(params.page);

  return <HomeView data={data} />;
}
