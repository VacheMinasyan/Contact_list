import types from "./type"
export function addNewContact(data) {
  return {
    type: types.CHANGE,
    payload: data
  }
}

// export function updateForm(formData) {
//   return {
//     type: types.UPDATE_FORM,
//     payload: formData,
//   };
// };
export const updateInputValue = (name, type, value, id) => {
  return {
    type: types.UPDATE_INPUT_VALUE,
    payload: { name, type, value, id },
  };
};