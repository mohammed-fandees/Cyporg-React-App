import "./play-button.css"
import { FaPlay } from "react-icons/fa";
export default function PlayButton(props) {
  return (
    <a href={props.reference} 
      className="play-button bg-white rounded-pill d-flex align-items-center justify-content-center position-absolute">
      <FaPlay />
    </a>
  )
}
