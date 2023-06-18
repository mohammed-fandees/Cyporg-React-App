import "./nav-items.css";

function NavItems(props) {
  return(
    <li className="nav-item">
      <a className={`nav-link px-3 py-2 me-2 fw-lightc ${props.customClass}`} aria-current="page" href={props.direct}>{props.children}</a>
    </li>
  );
}

export default NavItems;