import "./game-main-details.css";

export default function GameMainDetails(props) {
  return (
    <h4 className="text-capitalize">
      {props.name}
      <span className="mt-2 fw-normal d-block">{props.type}</span>
    </h4>
  )
}


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

export { OtherDetails };