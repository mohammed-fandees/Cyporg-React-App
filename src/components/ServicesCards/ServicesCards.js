import "./services-cards.css";

export default function ServicesCards(props) {
  return (
    <div className="col-lg-4">
      <div className="card rounded-5 mt-4 mt-lg-0">
        <div className="icon rounded-pill overflow-hidden"><img src={props.img} alt={props.alt} /></div>
        <h4 className="mt-4 mt-3 text-white fs-5 text-capitalize">{props.title}</h4>
        <p className="service-text">{props.text}</p>
      </div>
    </div>
  )
}
