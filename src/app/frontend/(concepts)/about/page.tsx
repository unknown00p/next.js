'use client'
import { useRouter } from "next/navigation";
function about() {
  const router = useRouter()
  function navigateFunc(){
    router.back()
  }
  return (
    <>
      <h2>about me</h2>
      <h3 className="cursor-pointer" onClick={navigateFunc}>go back</h3>
    </>
  );
}

export default about;
