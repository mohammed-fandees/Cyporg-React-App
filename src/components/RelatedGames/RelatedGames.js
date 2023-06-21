import { GameMainDetails, All} from "../index";
import "./related-games.css";

export default function RelatedGames(props) {
  return (
    <div className="related-game col-lg-6">
      <div className="game-item mb-4">
        <div className="row pb-4">
          <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
            <div className="image rounded-4 overflow-hidden">
              <img className="img-fluid" src={props.img} alt={props.alt} />
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="d-flex justify-content-between align-items-center w-100">
              <GameMainDetails name={props.name} type={props.type} />
              <All rate={props.rate} downloads={props.downloads}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
