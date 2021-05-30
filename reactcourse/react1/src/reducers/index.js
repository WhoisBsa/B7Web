import { conbineReducers } from 'redux';
import UserReducer from './UserReducer';

export default combineReducers({
  usuario: userReducer,
});