import axios from "axios";
import types from "./type"

export function addNewContact(data) {
  return {
    type: types.ADD_NEW,
    payload: data
  }
}

export const addContacts = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users?fbclid=IwAR2re5myPteN1P1_CtQvfqyTY2SBA3qN3kuo1y6Pe3SUgiXhWmBHzG8rnoA');
  const data = res.data;
  dispatch({ type: types.ADD_ALL, payload: data });
};