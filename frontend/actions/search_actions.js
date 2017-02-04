export const SEARCH = "SEARCH";


export const search = (query) => {
  return {
    type: SEARCH,
    query
  };
}