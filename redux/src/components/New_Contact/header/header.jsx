import { useNavigate } from "react-router-dom";
import "./header.css"

const NewHeader = () => {

  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  }
  return (
    <div className="Contact_add_box">
      <div className="Cancel_box">
        <button onClick={back} className="btn_" >Cancel</button>
      </div>
      <div className="New Contact_box">
        <h3>New Contact</h3>
      </div>
      <div className="Done_box">
        <button type="button" disabled className="btn_">Done</button>
      </div>
    </div>
  )
}
export default NewHeader;