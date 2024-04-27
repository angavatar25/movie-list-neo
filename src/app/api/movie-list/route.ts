import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch('https://private-2fff44-bncfetest.apiary-mock.com/movies');
    const { data } = await response.json();
    console.log(data)

    return NextResponse.json(data)
  } catch (err) {
    console.error('Error fetching data:', err);
    return NextResponse.json({ message: 'Error fetching data' });
  }
}