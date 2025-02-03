async function docs({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log(slug?.length)

  if (slug?.length == 2) {
    return (
      <div>
        this is doc for {slug[0]} and concept {slug[1]}
      </div>
    );
  }else if(slug?.length == 1){
    return <h1>this is doc for {slug[0]}</h1>
  }

  return <h1>this is docs</h1>
}

export default docs;
