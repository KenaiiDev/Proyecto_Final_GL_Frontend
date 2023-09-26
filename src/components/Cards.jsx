import React from "react";
import Image from "next/image";
import Link from "next/link";

/*
function Card() {
  return (
    <>
      <article className="my-4">
        <Link href={"/movieinfo"} className="min-w-30 max-w-xs">
          <div className="card min-w-301 max-w-xs bg-base-100 shadow-xl image-full ">
            <figure className="w-25">
              <Image
                src="/assets/gatito.jpg"
                width={1000}
                height={1000}
                alt="cat"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Title</h2>
              <p>Synopsis</p>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}

*/
function Card({ data }) {
  return (
    <article className="card w-48 bg-base-100 shadow-xl my-4 overflow-hidden">
      <Image
        className="mx-auto"
        src={data.poster_path}
        width={280}
        height={500}
        alt={`${data.original_title} poster`}
      />
      <div className="card-body px-4 py-3">
        <p className="overview">{data.overview}</p>
      </div>
    </article>
  );
}

export default Card;
