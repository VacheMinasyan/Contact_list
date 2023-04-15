import Contacts_Header from "../../components/header"
import Search from "../../components/Contacts/search/search_section"
import GetContacts from "../../components/Contacts/contacts/contacts"
import { useEffect } from "react"
// import { useState } from "react"
// import { useSelector, useDispatch } from "react-redux"


const Contacts = () => {
  // const dispatch = useDispatch()
  useEffect(() => {
    // const x = LoadContacts();
    // console.log(x)
    // dispatch()
  }, [])
  return (
    <div className="Contact__page">
      <Contacts_Header />
      <Search />
      <GetContacts />
    </div >
  )
}
export default Contacts