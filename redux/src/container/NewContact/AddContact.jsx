// import { useNavigate } from "react-router-dom";
import Photo from "../../components/New_Contact/add_photo_section/add_photo";
// import { useState } from "react";
import NewHeader from "../../components/New_Contact/header/header"
const AddContacts = () => {
  // const [info, setInfo] = useState();

  // const navigate = useNavigate();
  // const back = () => {
  //   navigate(-1)
  // }
  return (
    <div className="Contact__page" >
      <NewHeader />
      <Photo />
    </div >
  )
}
export default AddContacts;