import { data } from "../data";

export async function GET(_request: Request,{ params }: { params: Promise<{id: string }> }) {
  const { id } = await params;
  const filteredData = data.find((val) => val.id == parseInt(id));
  return Response.json(filteredData)
}
