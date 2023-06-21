import "./game-main-details.css";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
// import { BiSolidServer } from "react-icons/bi";

export default function GameMainDetails(props) {
  return (
    <h4 className="text-capitalize">
      {props.name}
      <span className="mt-2 fw-normal d-block">{props.type}</span>
    </h4>
  )
}

// Gaming Library Only
function OtherDetails(props) {
  return(
    <li className="col-lg-2 col-md-6 col-sm-6 mt-3 mt-lg-0 text-center text-md-start">
    <h4 className="text-capitalize">
      {props.children}
      <span className="mt-2 fw-normal d-block">{props.value}</span>
    </h4>
  </li>
  );
}

// Dynamic icons with type name
function Icon(props) {
  let icon;

  if(props.type === "star") icon = <FaStar className="star mb-1" />;
  else if (props.type === "download") icon = <FaDownload className="download mb-1" />;
  else if (props.type === "gamepad") icon = <FaGamepad className="gamepad mb-1" />;
  // else if (props.type === "server") icon = <BiSolidServer className="server mb-1" />;
  // else "";

  return(
    <>
      {icon}
    </>
  );
}

function All(props) {
  return(
    <ul>
      <li className="mb-1">
        <Icon type="star" /> {props.rate}
      </li>
      <li>
        <Icon type="download" /> {props.downloads}M
      </li>
    </ul>
  );
}

export { OtherDetails, All, Icon };