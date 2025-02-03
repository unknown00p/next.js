import Link from "next/link"

type pageId = {
    params: Promise<{pageId: string}>
}

async function dynamicRoute({params}:pageId) {
    const {pageId} = await params
  return (
    <div>
      this is page {pageId}

      <Link href={`/pages/${pageId}/reviews`}>Go to reviews</Link>
    </div>
  )
}

export default dynamicRoute
