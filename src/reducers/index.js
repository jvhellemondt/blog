import postsReducer from './postsReducer';

import { combineReducers } from 'redux';

export default combineReducers( {
  posts: postsReducer
} );