import React from "react";
import { useDispatch } from "react-redux";
import { updateInputValue } from "../../../../store/AddContact/action";
import { v4 as uuidv4 } from "uuid";
const InputField = ({ placeholder, name, type }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, type, value } = e.target;
    const id = uuidv4()
    dispatch(updateInputValue(name, type, value, id,));
  };



  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
