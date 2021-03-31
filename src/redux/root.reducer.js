import { combineReducers } from "redux";
import testReducer from "./test/test.reducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer