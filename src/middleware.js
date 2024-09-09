import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  const cookieStore = cookies();
  const locale = cookieStore.get('locale')?.value || 'id'; // default to 'id'
  // Set cookie if not present
  if (!request.cookies.get('locale')) {
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
  }

  return NextResponse.next();
}

// Specify paths where middleware should run
export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'], // Modify paths as needed
};
