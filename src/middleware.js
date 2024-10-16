import { NextResponse } from 'next/server';

export function middleware(request) {
  const locale = request.cookies.get('locale')?.value || 'id'; // Default locale is 'id'

  const response = NextResponse.next();

  // Set cookie if not present
  if (!request.cookies.get('locale')) {
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
  }

  return response;
}

// Specify paths where middleware should run
export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'], // Modify paths as needed
};
