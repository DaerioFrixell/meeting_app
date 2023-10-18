import { FC } from "react"
import {Link} from "react-router-dom"
import "./header.scss";

export const Header: FC = () => {
  return (
    <header className="header">      
      <Link className="header__link" to="/">main</Link>
      <Link className="header__link" to="/allunits">all units</Link>      
    </header>
  )
}