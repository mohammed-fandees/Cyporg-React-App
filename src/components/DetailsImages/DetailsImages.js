import "./details-images.css";

export default function DetailsImages(props) {
  return (
    <div className="col-lg-4">
      <div className="image rounded-5 overflow-hidden mb-4">
        <img src={props.img} alt={props.alt}/>
      </div>
    </div>
  )
}
