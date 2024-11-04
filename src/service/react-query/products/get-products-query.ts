import ClosureHookQuery from '@service/react-query/closure-hook-query.ts';
import { useCustomQuery } from '@service/react-query';
import { productService } from '@service/axios';

export const GetProductQuery = ClosureHookQuery(useCustomQuery, { queryKey: ['products'], fetcher: productService.getList });

