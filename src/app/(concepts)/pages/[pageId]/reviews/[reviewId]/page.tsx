async function reviewPage({params}:{params: Promise<{reviewId: string}>}) {
    const {reviewId} = await params
    if (reviewId == "2") {
      throw new Error("review 2 does not exists")
    }
  return (
    <div>
      review for reviewId {reviewId}
    </div>
  )
}

export default reviewPage
