import "./section-header.css";

export default function SectionHeader(props) {
  return (
    <div className="section-header mb-4">
      <h4 className="fs-2 fw-bolder">
        <span className="text-decoration-underline text-white">{props.span}</span>
        <em className="text-decoration-none"> {props.em}</em>
      </h4>
    </div>
  );
}
