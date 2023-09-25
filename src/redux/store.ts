import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import cardItems from "./reducers/cartItem";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = combineReducers({
cardItems:cardItems
})
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
  

export default store;