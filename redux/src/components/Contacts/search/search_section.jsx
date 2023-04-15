import search from "../../../image/search.png"
import "./search.css"

const Search = () => {
  return (
    <div className="Serch__second__section">

      <div>
        <img className="search__logo" src={search} alt="" />
      </div>
      <div>
        <input placeholder="Search" className="search__input" type="text" name="" id="" />

      </div>

    </div>
  )
}
export default Search;