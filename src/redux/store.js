import { createStore, combineReducers } from "redux";
import todoReducers from "./reducer/reducers";

const rootReducers = combineReducers({
  todoReducers,
});
const store = createStore(rootReducers);

export default store;