import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import api from '@/lib/api';

export interface AuthUser {
    AccountID: number;
    AccountIDNo: string;
    AONumber: string;
    AccountName: string;
    AccountGroup: string;
    AccountType: string;
    DomainAccount: string;
    Email: string;
    ValidTo: string | null;
    SignaturePath: string | null;
    SignatureImage: string | null;
    Nickname: string;
    isActive: boolean;
    GAvatar: string | null;
}

async function fetchCurrentUser(): Promise<AuthUser> {
    const { data } = await api.get('/user');
    return data.user;
}

export function useAuth() {
    const pathname = usePathname();
    const isPublicPage = pathname === '/' || pathname === '/login' || pathname === '/landing';

    const query = useQuery<AuthUser>({
        queryKey: ['auth', 'me'],
        queryFn: fetchCurrentUser,
        enabled: !!pathname && !isPublicPage,
        retry: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    });

    return {
        user: query.data ?? null,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error,
        refetch: query.refetch,
    };
}
