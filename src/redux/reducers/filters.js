import { ADD_FILTER, REMOVE_ITEM } from "../actionTypes";

const initialState = {
  appliedFilters: []
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER: {
      let isAlreadyExists = state.appliedFilters.some(el => el.name === action.payload.filter.name);

      let appliedFilters = state.appliedFilters.slice();

      if (isAlreadyExists) {
        appliedFilters = appliedFilters.filter(el => el.name !== action.payload.filter.name);
      }
      appliedFilters.push(action.payload.filter);
      return {
        ...state,
        appliedFilters
      };
    }
    case REMOVE_ITEM: {
      let item = action.payload.item;
      let appliedFilters = state.appliedFilters.slice();

      let parent = appliedFilters.filter(v => v.name === item.parent);
      let res = parent[0].items.filter(v => v !== item.item)

      parent[0].items = res;
      appliedFilters = appliedFilters.filter(el => el.name !== item.parent);
      appliedFilters.push(parent[0]);
      return {
        ...state,
        appliedFilters
      };
    }
    default: {
      return state;
    }
  }
}
