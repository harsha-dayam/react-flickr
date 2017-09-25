import { combineReducers } from 'redux';
import ImageReducer from './images';

const rootReducer = combineReducers({
  images: ImageReducer
});

export default rootReducer;
