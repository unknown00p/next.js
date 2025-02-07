import Link from "next/link"

function page() {
  return (
    <div>
      <h1>hello from page</h1>
      <Link href={"/pages/1"}>page 1</Link>
      <Link href={"/pages/2"}>page 2</Link>
    </div>
  )
}

export default page
