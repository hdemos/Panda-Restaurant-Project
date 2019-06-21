import {createStore, applyMiddleware, compose} from "redux";
import ayncReducer from "./reducers";
//import initialState from './reducers/initialStates/userSignup';
import thunk from "redux-thunk";
import formValidationMiddleware from "./middleware/formValidationMiddleware";
import ValidateAttributeUpdateMiddleware from "./middleware/validateAttributeUpdateMiddleware";
import apiMiddleware from "./middleware/apiMiddleware";


//let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(ayncReducer,
    applyMiddleware(
    thunk,
    formValidationMiddleware,
    ValidateAttributeUpdateMiddleware,
    apiMiddleware)
);

export default store;