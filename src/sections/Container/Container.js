import "./container.css"

export default function Container(props) {
  return(
    <div className="page-content rounded-5">{props.children}</div>
  );
}
