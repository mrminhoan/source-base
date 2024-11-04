import { useQuery } from '@tanstack/react-query';

export const useCustomQuery = (params: any) => {
  const { queryKey, fetcher } = params;
  const data = useQuery<any>({
    queryKey: queryKey,
    queryFn: () => fetcher(),
  });

  return data;
};
