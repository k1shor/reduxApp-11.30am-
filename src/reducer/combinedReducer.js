import { combineReducers } from "redux";
import cart_reducer from "./cart_reducer";
import game_reducer from "./game_reducer";

const ourCombinedReducer =combineReducers({
    cart : cart_reducer,
    game : game_reducer
})

export default ourCombinedReducer