import { NextResponse } from 'next/server';

export async function POST(request) {
  const { categories } = await request.json()
  const response = NextResponse.json({ message: 'Categories', categories });
  response.cookies.set('categories', JSON.stringify(categories), {
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
  return response;
}

export async function GET(request) {
  let cookiesCategories = request.cookies.get('categories').value
  const response = NextResponse.json({ message: 'Categories', categories: JSON.parse(cookiesCategories) });
  return response;
}