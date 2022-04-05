import { combineReducers } from "redux";
import finalCartReducer from "./finalCartReducer";
import itemReducer from "./itemReducer";

const finalReducer = combineReducers({
    items: itemReducer,
    cart: finalCartReducer
})

export default finalReducer