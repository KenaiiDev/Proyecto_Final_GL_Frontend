import React from "react";
import Image from "next/image";

function Cards() {
  return (
    <>
      <h1 className="font-sans text-5xl font-bold my-3 mx-2 text-purple-400 text-center">TOP 20 </h1>
      <div className="card w-90 bg-base-100 shadow-xl image-full ">
  <Image src="/assets/gatito.jpg" width={500} height={500} alt="cat" />
  <div className="card-body">
    <h2 className="card-title">Nombre de la pelicula</h2>
    <p>Breve descripción</p>
  </div>
</div>
<div className="card w-90 bg-base-100 shadow-xl image-full my-2.5">
  <Image src="/assets/supercat.jpeg" width={300} height={300} alt="cat" />
  <div className="card-body">
    <h2 className="card-title">Nombre de la pelicula</h2>
    <p>Breve descripción</p>
  </div>
</div>
<div className="card w-90 bg-base-100 shadow-xl image-full ">
  <Image src="/assets/superhero-cat.jpg" width={500} height={500} alt="cat" />
  <div className="card-body">
    <h2 className="card-title">Nombre de la pelicula</h2>
    <p>Breve descripción</p>
  </div>
</div>
    </>
  );
}

export default Cards;
