import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(`Proxy middleware running for: ${pathname}`);

    // Define protected and public routes
    const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/users');
    const isLoginPage = pathname === '/login';

    const hasSession = request.cookies.has('laravel_session') || request.cookies.has('XSRF-TOKEN');

    if (isProtectedRoute && !hasSession) {
        const url = new URL('/login', request.url);
        return NextResponse.redirect(url);
    }

    if (isLoginPage && hasSession) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}
