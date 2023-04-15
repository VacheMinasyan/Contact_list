import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Contact_Page = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state?.all?.contacts);
  const selectedContact = contacts.find((contact) => contact.id == id);
  const navigate = useNavigate()
  const handel = () => {

  }

  return (
    <div>
      <h2>Contact Page</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      <button>EDit</button>

      <div>Name: {selectedContact.name}</div>
      <div>Email: {selectedContact.email}</div>
      <div>Phone: {selectedContact.phone}</div>
    </div>
  );
};

export default Contact_Page;