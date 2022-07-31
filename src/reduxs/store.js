import {createStore} from "redux"
import rootReducer from "../reduxs/reducers/index"

const store = createStore(rootReducer);


export default store;