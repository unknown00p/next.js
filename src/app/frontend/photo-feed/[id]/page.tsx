import React from "react";
import { wondersOfWorld } from "../photoDetail";
import "@/app/globals.css";

async function imageId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const image = wondersOfWorld.find((val) => val.id == id);
  return (
    <div className="flex items-center justify-center">
      <div className="w-80 m-auto">
        <img src={image?.profileImg} alt="" />
        <h1>name: {image?.Name}</h1>
        <h3>location: {image?.location}</h3>
        <p>age: {image?.age}</p>
      </div>
    </div>
  );
}

export default imageId;
