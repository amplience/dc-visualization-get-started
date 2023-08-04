export const getURLSearchParam = (
  key: string,
  search = typeof window === "undefined" ? undefined : window.location.search
): string | undefined =>
  (search && new URLSearchParams(search).get(key)) || undefined;
