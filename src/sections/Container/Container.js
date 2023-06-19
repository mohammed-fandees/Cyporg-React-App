import "./container.css"

export default function Container(props) {
  return(
    <div className="main-container rounded-5">{props.children}</div>
  );
}
