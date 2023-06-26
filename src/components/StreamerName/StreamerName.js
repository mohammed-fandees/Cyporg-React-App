import "./streamer-name.css";
import { AiFillCheckCircle } from "react-icons/ai";

export default function StreamerName(props) {
  return (
    <span className="user-name mb-2 d-flex">
      <AiFillCheckCircle className="verify" /> {props.userName}
    </span>
  )
}
