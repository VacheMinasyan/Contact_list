import "./contacts.css"
import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../../store/Contacts/action";
import Contact_User from "./util/util";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { Contact_Page } from "../../UserPage/contact_page";

export const GetContacts = () => {
  const contacts = useSelector((state) => state?.all.contacts)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!contacts.length) {
      dispatch(addContacts());
    }
  }, [contacts]);



  return (
    <div className="Contact_section">
      {contacts?.map((el, index) => {
        let word_one = el.name.slice(0, 1)
        return (
          <Contact_User key={index} word={word_one} name={el.name} id={el.id} />
        )
      })}



    </div >

  )




}
export default GetContacts;
