import "./title.css";

export default function Title(props) {
  return(
    <h4 className="wedget-title fw-bolder mb-4">{props.children}</h4>
  );
}