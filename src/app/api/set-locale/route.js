// app/api/set-locale/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let locale = searchParams.get('locale') // Default locale is 'id'
  if (locale) {
    const response = NextResponse.json({ message: 'Locale set ' + locale });
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    return response;
  }
  locale = request.cookies.get('locale')?.value
  const response = NextResponse.json({ message: 'Locale is ' + locale });
  return response;
}
