import React from "react";
import Image from "next/image";

function Carousel({ data }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="carousel max-w-8xl w-full">
        {data.map((movie) => {
          return (
            <div key={movie.id} id={movie.id} className="carousel-item w-full relative">
              <Image
                src={movie.backdrop_path}
                alt={movie.title}
                width={1000}
                height={560}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data.map((movie) => {
          return (
            <a
              href={`#${movie.id}`}
              key={`#${movie.id}`}
              className="btn btn-xs"
            >
              {data.indexOf(movie) + 1}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
