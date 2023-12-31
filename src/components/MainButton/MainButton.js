import "./main-button.css"

export default function MainButton(props) {
  return(
    <div className="main-button">
      <a className={`main-btn rounded-pill text-white smooth px-4 text-capitalize d-inline-block ${props.class}`} href={props.reference}>
        {props.children}
      </a>
    </div>
  );
}