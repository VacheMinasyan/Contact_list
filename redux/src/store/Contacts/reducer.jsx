import types from "./type"

const initialState = {
  contacts: [],
}
const ContactReducer = (state = initialState, option) => {
  const { payload } = option;
  console.log(payload)
  switch (option.type) {
    case types.ADD_ALL:
      return { ...state, contacts: payload };
    case types.ADD_NEW:
      return { ...state, contacts: [...state.contacts, payload] };

    default:
      return state
  }
}
export default ContactReducer