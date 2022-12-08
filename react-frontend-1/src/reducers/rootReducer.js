import itemReducer from "./itemReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    itemList: itemReducer,
})
export default rootReducer;