import React from "react";
import { wondersOfWorld } from "@/app/photo-feed/photoDetail";
import "@/app/globals.css";

async function imageId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const image = wondersOfWorld.find((val) => val.id == id);
  return (
    <div className="fixed bg-black/75 w-screen h-screen m-auto pt-40">
      <div className="w-80 m-auto">
        <img src={image?.profileImg} alt="" />
        <h1>name: {image?.Name}</h1>
        <h3>location: {image?.location}</h3>
      </div>
    </div>
  );
}

export default imageId;
