import { data } from "./data";

export async function GET() {
  return Response.json(data);
}

export async function POST(request: Request) {
  const res = await request.json();
  const newData = {
    id: data.length + 1,
    text: res.title,
  };

  data.push(newData);
  return new Response(JSON.stringify(newData), {
    headers: { "Content-Type": "application/json" },
    status: 201
  });
}
