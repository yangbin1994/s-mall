import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import rootReducer from "./reducers";

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(reduxThunk));
  return store;
}
