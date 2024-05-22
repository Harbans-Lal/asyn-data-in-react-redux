import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { myReducer } from "../reducer/reducer";

// npm install redux-devtools-extension --save --legacy-peer-deps
import { composeWithDevTools } from "redux-devtools-extension";



const store  = createStore(myReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;