import "./game-main-details.css";

export default function GameMainDetails(props) {
  return (
    <h4 className="text-capitalize">
      {props.name}
      <span className="mt-2 fw-normal d-block">{props.type}</span>
    </h4>
  )
}
