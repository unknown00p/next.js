import { Metadata } from "next"
import Link from "next/link"

type pageId = {
    params: Promise<{pageId: string}>
}

export const generateMetadata = async ({params}:pageId): Promise<Metadata>=>{
  const { pageId } = await params

  return {
    title: `this is page ${pageId}`
  }
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