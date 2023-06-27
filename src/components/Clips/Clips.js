import { PlayButton } from "../index";
import "./clips.css";
import { BsFillEyeFill } from "react-icons/bs";

export default function Clips(props) {
  return (
    <div className="col-md-6 col-lg-3 item clip">
    <div className="item-card rounded-5 mb-4">
      <div className="image overflow-hidden rounded-4 position-relative mb-3">
        <img className="img-fluid" alt="game-img" src={props.img} />
        <PlayButton reference=" #" />
      </div>
      <div className="clip-content d-flex justify-content-between align-items-center">
        <h4 className="m-0 fw-bolder">{props.title}</h4>
        <span><BsFillEyeFill /> {props.views} </span>
      </div>
    </div>
  </div>
  )
}
