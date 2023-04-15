import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./header.css"

const Contacts_Header = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [count])
  return (
    <div className="contacts__box">
      <h1 className="contact__title">Contacts</h1>
      <p>You {count}</p>
      <div>
        <Link className="contact__title__plus" to="/addContact"><span >+</span></Link>
      </div>
    </div>
  )
}
export default Contacts_Header