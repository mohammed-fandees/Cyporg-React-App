import { All, GameMainDetails } from "../index"
import "./slide-card.css"

export default function SlideCard(props) {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="d-flex flex-column">
        <div className="image card-img position-relative rounded-5 overflow-hidden">
          <img className="img-fluid" src={props.img} alt={props.alt} />
          <div className="streaming rounded-pill position-absolute px-3 py-2">
            {props.streaming}
          </div>
        </div>
        <div className="game-details-content d-flex justify-content-between mt-4">
          <GameMainDetails name={props.name} type={props.type} />
          <All rate={props.rate} downloads={props.downloads} />
        </div>
      </div>
    </div>
  )
}
