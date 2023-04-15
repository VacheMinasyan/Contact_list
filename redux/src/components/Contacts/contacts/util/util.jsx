import { useNavigate } from 'react-router-dom';

const Contact_User = ({ id, word, name }) => {
  const navigate = useNavigate();

  const handle = () => {
    navigate(`/contactlist/${id}`);
  }
  return (
    <div className="Cont" onClick={handle}>
      <div className="alfa_header">
        <div className="alfa">{word}</div>
        <div className="circle_box">
          <div className="circle"><span className="x">{word}</span> </div>
          <div className="alfa_name">{name}</div>
        </div>
      </div>
    </div>
  )
}
export default Contact_User