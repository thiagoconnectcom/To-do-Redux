import {FETCH_TODOS_SUCCESS} from '../actions/todo';
  
  const initialState = {
    items: [],
  };
  
  export default function todo(state = initialState, action) {
    switch(action.type) {
      case FETCH_TODOS_SUCCESS:
        return {
          ...state,
          items: action.payload.todoshow
        };  
      default:
        return state;
    }
  }