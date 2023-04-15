import { combineReducers } from "redux";
import ContactReducer from "./Contacts/reducer";
import AddNewContactReduser from "./AddContact/reducer";
// import produce from "redux-immer"
const reducers = combineReducers({
  all: ContactReducer,
  new: AddNewContactReduser
})


export default reducers;