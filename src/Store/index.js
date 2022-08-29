import {createStore, combineReducers} from "redux";
import {reducerScenery} from "./reducerScenery";

const rootReducer = combineReducers({
    scenery: reducerScenery
})

export const store = createStore(rootReducer)