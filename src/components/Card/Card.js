import "./card.css";
import { GameMainDetails, All } from "../index";

export default function Card(props) {
  return (
    <div className="col-md-6 col-lg-3 item">
      <div className="item-card rounded-5 mb-4">
        <div className="image overflow-hidden rounded-4">
          <img className="img-fluid" alt="game-img" src={props.img} />
        </div>
        <div className="text mt-3 d-flex justify-content-between">
          <GameMainDetails name={props.name} type={props.type} />
          <All rate={props.rate} downloads={props.downloads}/>
        </div>
      </div>
    </div>
  );
}
