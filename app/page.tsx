'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/login/useAuth';
import LandingHero from './landing/page';

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If user is logged in, we'll redirect, but we still return null or a skeleton 
  // to avoid flicker if the redirect takes a moment.
  if (user) return null;

  return (
    <div className="min-h-screen bg-white">
      <main>
        <LandingHero />
      </main>
    </div>
  );
}
