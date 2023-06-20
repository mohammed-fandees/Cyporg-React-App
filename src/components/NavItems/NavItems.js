import { Link } from "react-router-dom";
import "./nav-items.css";

export default function NavItem(props) {
  return(
    <li className="nav-item">
      <Link to={props.reference} className={`nav-link px-3 py-2 me-2 fw-lightc text-capitalize ${props.class}`} aria-current="page">
        {props.children}
      </Link>
    </li>
  );
}