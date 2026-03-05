import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Users } from '@/interface/user';

export const useLatestUsers = () => {
    return useQuery<Users[]>({
        queryKey: ['users', 'latest'],
        queryFn: async () => {
            const { data } = await api.get('/users/latest');
            return data.data || data;
        },
    });
};

export const useUserCount = () => {
    return useQuery<number>({
        queryKey: ['users', 'count'],
        queryFn: async () => {
            const { data } = await api.get('/users/count');
            return data.count;
        },
    });
};

export const useAccountGroupStats = () => {
    return useQuery<number>({
        queryKey: ['users', 'stats', 'groups'],
        queryFn: async () => {
            const { data } = await api.get('/users/stats/groups');
            return data.count;
        },
    });
};

export const useAccountTypeStats = () => {
    return useQuery<number>({
        queryKey: ['users', 'stats', 'types'],
        queryFn: async () => {
            const { data } = await api.get('/users/stats/types');
            return data.count;
        },
    });
};
