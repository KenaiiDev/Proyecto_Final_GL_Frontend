import React from "react";
import Image from "next/image";

function Movieinfo() {
  return (
    <>
      <div className="hero bg-midnight-purple">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/assets/gatito.jpg"
            alt="cat"
            width={300}
            height={300}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">Movie name (Year)</h1>
            <p className="py-14 font-bold">Sinopsis</p>
            <p className="font-bold">Actores</p>
            <p className="py-2 font-bold">Director</p>
          </div>
          <div>
            <h1>Reseñas</h1>
          </div>
          <div className="flex flex-col w-full">
            <div className="divider "></div>
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="avatar">
            <div className="w-24 rounded">
              <Image
                src="/assets/gatito.jpg"
                alt="cat"
                width={500}
                height={500}
              />
            </div>
            <h1 className="mx-10">Usuario</h1>
            <p className="">Comment</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Movieinfo;
