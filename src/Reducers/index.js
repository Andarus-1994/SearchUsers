import users from './users';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  
    user:users,
    
});

export default allReducers;