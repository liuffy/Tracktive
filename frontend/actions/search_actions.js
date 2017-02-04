export const SEARCH_PLAYLISTS = "SEARCH_PLAYLISTS";


export function search (query){
	console.log(query)
  return {
    type: SEARCH_PLAYLISTS,
    query
  };
}