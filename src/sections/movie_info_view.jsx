import React from "react";
import Image from "next/image";
import Comment from "@/components/Comment";
import Divider from "@/components/Divider";

function Movieinfo({ data }) {
  const movie = data.data;
  console.log({ movie });
  return (
    <>
      <div className="h-10 mb-10"></div>
      <div className="hero bg-midnight-purple">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={movie.backdrop_path}
            alt={`${movie.original_title} Poster`}
            width={1000}
            height={1000}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">
              {movie.title} {movie?.release_date?.split("-")[0]}
            </h1>
            <p className="py-14 font-bold">{movie.overview}</p>
            <p className="font-bold">Actores</p>
            <p className="py-2 font-bold">Director</p>
          </div>
          <section>
            <h1 className="text-3xl">Reseñas</h1>
            <Divider />
            <div className="flex flex-col w-full"></div>
          </section>
        </div>
      </div>
    </>
  );
}


export default Movieinfo;
