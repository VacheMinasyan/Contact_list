import { useState } from "react";
import "./add_photo.css"
import { useDispatch, useSelector } from "react-redux";
import InputField from "./util/InputField";
import { addNewContact } from "../../../store/Contacts/action";
const Photo = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state?.all.contacts)
  const contact = useSelector((state) => state?.new)

  return (
    <>
      <div className="photo__box">
        <div className="photo__img">
        </div>
      </div>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <InputField placeholder="Name" name="name" type="text" />
        <InputField placeholder="Surname" name="surname" type="text" />
        <InputField placeholder="Company" name="company" type="text" />
        <InputField placeholder="Phone:" name="phone" type="number" />
        <InputField placeholder="Email" name="email" type="email" />


        <button onClick={() => dispatch(addNewContact(contact))}>Submit</button>
      </form >
    </>

  )
}
export default Photo;