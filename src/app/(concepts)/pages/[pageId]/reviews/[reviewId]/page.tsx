async function reviewPage({params}:{params: Promise<{reviewId: string}>}) {
    const {reviewId} = await params
  return (
    <div>
      review for reviewId {reviewId}
    </div>
  )
}

export default reviewPage
