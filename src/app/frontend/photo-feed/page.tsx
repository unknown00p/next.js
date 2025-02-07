import React from "react";
import { wondersOfWorld } from "./photoDetail";
import "@/app/globals.css";
import Link from "next/link";

function photoFeed() {
  return (
    <div className="flex gap-5 flex-wrap">
      {wondersOfWorld.map((val) => {
        return (
          <Link href={`/photo-feed/${val.id}`} key={val.id}>
            <img className="w-56 h-56 bg-contain" src={val.profileImg} alt="" />
          </Link>
        );
      })}
    </div>
  );
}

export default photoFeed;
