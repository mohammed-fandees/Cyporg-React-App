import "./nav-items.css";

export default function NavItem(props) {
  return(
    <li className="nav-item">
      <a className={`nav-link px-3 py-2 me-2 fw-lightc text-capitalize ${props.class}`} aria-current="page" href={props.reference}>
        {props.children}
      </a>
    </li>
  );
}