"use client";
import { useRouter } from "next/navigation";

export default function articals() {
  const router = useRouter();

  function redirectFunc() {
    router.push("/about");
  }
  return (
    <>
      <h1>hello backend</h1>
      <h3 onClick={redirectFunc}>GO TO</h3>
    </>
  );
}