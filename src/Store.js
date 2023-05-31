import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./reducers/contactsReducer";
// import rootReducer from "./reducers";
import  rootReducer  from './reducers/index'

const store = configureStore(rootReducer);

export default store;
