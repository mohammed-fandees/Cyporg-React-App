import "./side-details.css";
import { Icon } from "../index";

export default function SideDetails(props) {
  return (
    <li className="col-sm-3 mb-3 mb-sm-0 d-flex flex-column align-items-center">
      <Icon type={props.icon} />
      {props.content}
    </li>
  )
}
