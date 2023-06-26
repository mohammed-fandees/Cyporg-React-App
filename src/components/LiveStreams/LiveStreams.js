import "./live-streams.css"
import { BsEyeFill } from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import StreamerName from "../StreamerName/StreamerName";

export default function LiveStreams(props) {
  return (
    <div className="col-md-6 col-lg-3 mb-4 live-stream">
      <div className="image rounded-5 mb-3 position-relative overflow-hidden">
        <img className="img-fluid" src={props.img} alt={props.alt} />
        <div className="live position-absolute rounded-pill px-2 ">Live</div>
        <div className="position-absolute hover-effect d-flex gap-2">
          <div className="views px-2 rounded-pill"><BsEyeFill />{props.views}</div>
          <div className="game-name px-2 rounded-pill"><FaGamepad />{props.gameName}</div>
        </div>
      </div>
      <div className="stream-details d-flex gap-2">
        <div className="user-img rounded-pill overflow-hidden">
          <img className="img-fluid" src={props.userImg} alt={props.userAlt} />
        </div>
        <div className="user-text">
          <StreamerName userName={props.userName} />
          <h5 className="live-description">{props.desc}</h5>
        </div>
      </div>
    </div>
  );
}
