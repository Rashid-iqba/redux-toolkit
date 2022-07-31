import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/updownSlice";
export default configureStore({
    reducer:{
        counter: counterReducer,
    }

});