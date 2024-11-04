import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge"
import { queryOptions } from '@tanstack/react-query'
export default function ClosureHookQuery(fn: Function, paramsFn?: any) {
  return (params) => {
    const mergeParams = merge(cloneDeep(paramsFn), params)
    return fn(mergeParams);
  };
}
