import React from "react";
import Image from "next/image";
import Divider from "@/components/Divider";
import Card from "@/components/Cards";

function UserView() {
  return (
    <>
      <div className="h-10 mb-10"></div>
      <Divider />
      <section className="flex-1 w-full justify-center content-center text-center">
        <h1 className="text-3xl">USERNAME</h1>
        <div className="avatar m-5">
          <div className="w-40 rounded-xl">
            <Image
              src="/assets/user_round.png"
              alt="user_image"
              width={"100"}
              height={"100"}
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-xl p-2">Full Name: {}</h1>
        <h1 className="text-xl p-2">Birthday: {}</h1>
        <h1 className="text-xl p-2">Member Since: {}</h1>
      </section>
      <Divider />
    </>
  );
}

export default UserView;
