import { BaseSearchModel } from '@models/class';
import { useState } from 'react';
import { GetProductQuery } from '@service/react-query/products/get-products-query.ts';
import { useQuery } from '@tanstack/react-query';

const payload: Partial<BaseSearchModel> = {
  limit: 20,
  skip: 10,
  select: 'title,price',
};

function ProductList() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery<any>({
  //   queryKey: ['products', page],
  //   queryFn: () => productService.getList(),
  //   // enabled: isPaused,
  //   retry: 3,
  //   placeholderData: keepPreviousData,
  //   staleTime: 5000,
  // });

  const { isPending, isError, error, data, isFetching, isPlaceholderData, isLoading } = GetProductQuery({
    queryKey: [page]
  });

  return (
    <>
      <div>Product List Page</div>
      <button style={{ marginTop: '2rem' }} onClick={() => setIsPaused(!isPaused)}>
        Toggle Query: {`${isPaused}`}
      </button>

      <div>
        {isFetching ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="mt-10">
            <p className="text-[20px]">List User Name</p>
            {data?.data?.data?.map((project) => <p key={project.id}>{project.name}</p>)}

            <span>Current Page: {page + 1}</span>
            <div className="flex gap-10 mt-10">
              <button onClick={() => setPage((old) => old - 1)}>Previous Page</button>
              <button onClick={() => setPage((old) => old + 1)}>Next Page</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductList;
