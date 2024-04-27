import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id')
  try {
    const response = await fetch(`https://private-2fff44-bncfetest.apiary-mock.com/movies/${id}`);
    const { data } = await response.json();

    return NextResponse.json(data)
  } catch (err) {
    console.error('Error fetching data:', err);
    return NextResponse.json({ message: 'Error fetching data' });
  }
}