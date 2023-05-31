import { combineReducers } from "redux";
import contactReducer from "./contactsReducer";

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default rootReducer;
