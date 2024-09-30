// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { userSignUpReducer, userSignInReducer } from './reducers/userReducers';

// const reducer = combineReducers({
//   userSignUp: userSignUpReducer,
//   userSignIn: userSignInReducer,
// });

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;


/////////////////////////////////
// src/store.js
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { EditUserReducer, SignInReducer, SignUpReducer } from "./Recuder/userReducers";
// // import { composeWithDevTools } from "redux-devtools-extension";
// // import logger from "redux-logger";
// // import thunk from "redux-thunk";


// const reducers = combineReducers({
//   userSignIn: SignInReducer,
//   userSignUp: SignUpReducer,
//   editUser: EditUserReducer,

// });

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );

// export default store;
