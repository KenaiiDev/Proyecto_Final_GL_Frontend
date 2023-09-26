import React from "react";
import Carousel from "@/components/Carousel";
import Card from "@/components/Cards";
import Link from "next/link";

function HomeView({ data }) {
  const movies = data.data.results;
  const page = data.data.page;

  const carouselMovies = movies.slice(0, 6);
  const cardsMovies = movies.slice(6, movies.length);

  return (
    <>
      <section className="flex-3 min-w-full h-fit">
        <Carousel data={carouselMovies} />
      </section>
      <h1 className="font-sans text-5xl font-bold my-3 mx-2 text-purple-400 text-center">
        TOP 20{" "}
      </h1>
      <section className="grid grid-cols-1 items-center max-w-5xl mx-auto">
        <div className="flex w-full flex-wrap justify-evenly">
          {cardsMovies.map((movie) => {
            return (
              <Link key={movie.id} href={`/movieinfo/${movie.id}`}>
                <Card data={movie} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HomeView;
