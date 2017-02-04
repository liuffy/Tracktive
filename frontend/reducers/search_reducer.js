import {SEARCH} from '../actions/search_actions';



const initialState = {
  query: ""
};

const SearchReducer = (state = initialState, action) => {

	Object.freeze(state);
 	let dupState = {};

  switch(action.type) {
    case SEARCH:
      dupState = merge({}, action.query);
      return dupState;

    default:
      return state;
  }
};

export default SearchReducer;
