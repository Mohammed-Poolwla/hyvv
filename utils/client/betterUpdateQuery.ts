import { Cache, QueryInput } from "@urql/exchange-graphcache";

// this function fixes ts issues
// for urql's cache updates
export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  // eslint-disable-next-line no-unused-vars
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}
