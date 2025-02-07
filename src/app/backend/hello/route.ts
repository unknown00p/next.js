import { NextRequest } from "next/server";
import { data } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const quary = searchParams.get('query')
  const filterdComments = quary ? data.filter((val)=> val.text.includes(quary)): data 
  return Response.json(filterdComments);
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
    status: 201,
  });
}
