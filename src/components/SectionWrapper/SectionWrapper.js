import "./section-wrapper.css";

export default function SectionWrapper(props) {
  return (
    <div className="section-wrapper rounded-5 mt-5">
      {props.children}
    </div>
  );
};