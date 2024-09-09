export interface FetchResponse<T> {
    count: number;
    results: T[];
}

// const useDataQuery = <T>(
//     queryKey: QueryKey,
//     endpoint: string,
//     config?: UseQueryOptions<FetchResponse<T>, Error, T[]> & AxiosRequestConfig
// ) => {
//     return useQuery<FetchResponse<T>, Error, T[]>({
//         queryKey,
//         queryFn: () => apiClient.get<FetchResponse<T>>(endpoint, config).then(res => res.data),
//         select: (data) => data.results,
//         ...config
//     });
// };
