import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Users } from '@/interface/user';

export interface PaginatedResponse<Users> {
    data: Users[];
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        from: number;
        to: number;
        path: string;
    };
}

export const useUsers = () => {
    return useQuery<Users[]>({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await api.get('/users');
            return data.data || data;
        },
    });
};

export const useUsersPaginated = (page: number = 1, pageSize: number = 10, filters: any = {}) => {
    return useQuery<PaginatedResponse<Users>>({
        queryKey: ['users', 'paginate', page, pageSize, filters],
        queryFn: async () => {
            const { data } = await api.get('/users/paginate', {
                params: {
                    page,
                    per_page: pageSize,
                    ...filters
                },
            });
            return data;
        },
    });
};
