import productReducer from './productReducer';
import vaccineReducer from './vaccineReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    productReducer,
    vaccineReducer
})

export default rootReducer;