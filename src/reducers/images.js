import { FETCH_IMAGES } from '../actions/index';

export default function(state = [], action){
  switch(action.type) {
    case FETCH_IMAGES:
      console.log(typeof(action.payload.data));
      return action.payload.data;
  }
  return state;
}
