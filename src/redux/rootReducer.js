import { combineReducers } from "redux";
import sectionReducer from "./sections/sectionReducer";
import bottomNavigationReducer from "./bottomnavigation/bottomNavigationReducer"

const rootReducer= combineReducers({
    section: sectionReducer,
    bottomNavigationValue: bottomNavigationReducer,
})
export default rootReducer