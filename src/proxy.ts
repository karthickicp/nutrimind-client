import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_ROUTES = [
  '/login',
  '/signup',
  '/forgot-password',
  '/otp-verification',
  '/reset-password',
  '/trainer-registration',
];

const PROTECTED_ROUTES = [
  '/dashboard',
  '/meal_planner',
  '/explore_diet_plans',
  '/user_details',
];

export function proxy(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const token = cookies.get('nutri-accessToken')?.value;

  console.log(nextUrl.pathname, "nextUrl");

  const isAuthRoute = AUTH_ROUTES.some((route) => nextUrl.pathname.startsWith(route));
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => nextUrl.pathname.startsWith(route));

  if (token) {
    // If user is logged in and tries to access auth routes, redirect to dashboard
    if (isAuthRoute) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } else {
    // If user is not logged in and tries to access protected routes, redirect to login
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
