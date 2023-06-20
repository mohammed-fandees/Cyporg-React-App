import "./section-header.css";

export default function SectionHeader(props) {
  return (
    <div className="section-header mb-4">
      <h4 className="fw-bolder text-capitalize">
        <span className="text-decoration-underline text-white">{props.title}</span>
        <em className="text-decoration-none"> {props.subtitle}</em>
      </h4>
    </div>
  );
}
