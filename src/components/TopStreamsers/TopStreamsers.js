import "./top-streamers.css";
import { MainButton, StreamerName } from "../index";

export default function TopStreamsers(props) {
  return (
    <li className="col-12 pb-4 mb-4 game-item ">
      <div className="row align-items-center">
        <div className="col-1 d-none d-md-block">
            0{props.num}
        </div>

        <div className="col-2 col-lg-2">
          <div className="user-img rounded-pill overflow-hidden">
            <img src={props.img} alt={props.alt} />
          </div>
        </div>

        <div className="col-xl-5 col-lg-8 col-md-6 col-10">
          <StreamerName userName={props.userName} />
        </div>

        <div className="col-xxl-4 col-lg-12 col-md-3 col-sm-12 w-lg-100 mt-3 mt-xxl-0">
          <MainButton reference=" #" class="d-block w-100 text-center">follow</MainButton>
        </div>

      </div>
    </li>
  )
}
