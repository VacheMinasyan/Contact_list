// import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contacts from "../../container/Contacts/Contacts"
import AddContact from "../../container/NewContact/AddContact"
import { Contact_Page } from "../../components/UserPage/contact_page"

const Routers = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts />} exact />
          <Route path="/addContact" element={<AddContact />} exact />
          <Route path="/contactlist/:id" element={<Contact_Page />} exact />
        </Routes>
      </BrowserRouter>


    </div>
  )
}
export default Routers;