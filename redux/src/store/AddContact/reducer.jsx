import types from "./type"

const initialState = {
  id: "",
  name: '',
  surname: '',
  company: '',
  phone: '',
  email: '',
};


const AddNewContactReduser = (state = initialState, option) => {
  const { payload } = option;
  switch (option.type) {
    case types.UPDATE_INPUT_VALUE:
      state.id = option.payload.id
      return {
        ...state,
        [option.payload.name]: option.payload.value,
      };
    default:
      return state
  }
}
export default AddNewContactReduser;