import { NextResponse } from 'next/server';

export async function GET(request) {
  // Placeholder for fetching car data
  const cars = [];
  return NextResponse.json(cars);
}
