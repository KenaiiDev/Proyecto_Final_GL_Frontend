import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <>
      <Link href={"/movieinfo"}>
        <div className="card w-80 bg-base-100 shadow-xl image-full m-5">
          <figure>
            <Image
              src="/assets/gatito.jpg"
              width={500}
              height={500}
              alt="cat"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>Synopsis</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
