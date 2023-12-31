import React from "react";
import HomeView from "@/sections/home_view";

import { getMovies } from "@/api/moviesApi";

export default async function PrincipalPage() {
  const data = await getMovies();

  return <HomeView data={data} />;
}
