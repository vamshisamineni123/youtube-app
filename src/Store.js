// import { configureStore } from "@reduxjs/toolkit";

// import contactReducer from "./reducers/contactsReducer";
// // import rootReducer from "./reducers";
// import  rootReducer  from './reducers/index'

// const store = configureStore(rootReducer);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/contactsReducer.js"
// const store = configureStore({
//   reducer: rootReducer,
// });
const store = configureStore({
  reducer: {
    contacts: rootReducer
  }
});
export default store;
