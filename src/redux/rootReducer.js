import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './slices/loginSlice';
import personalFormReducer from "./slices/personalFormSlice";
import updatePasswordReducer from "./slices/updatePasswordSlice";
import forgotPasswordReducer from "./slices/forgotPasswordSlice";
import fetalReducer from "./slices/fetalSlice";

const rootReducer = combineReducers({
    auth: loginReducer,
    personal: personalFormReducer,
    uPassword: updatePasswordReducer,
    forgot: forgotPasswordReducer,
    fetal: fetalReducer,
});

export default rootReducer;