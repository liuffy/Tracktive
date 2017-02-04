import {SEARCH_PLAYLISTS} from '../actions/search_actions';


const initialState = {
  query: null
};

const SearchReducer = (state = initialState, action) => {

	Object.freeze(state);

  switch(action.type) {
    case SEARCH_PLAYLISTS:
      return action.query;

    default:
      return state;
  }
};

export default SearchReducer;
