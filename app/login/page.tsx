import React, { Suspense } from 'react';
import LoginClient from './components/LoginClient';

export const metadata = {
    title: 'Login - AppDev Central',
    description: 'Login with your Google account to access AppDev Central.',
};

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-text-info font-medium">Loading...</p>
            </div>
        }>
            <LoginClient />
        </Suspense>
    );
}
