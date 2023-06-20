import { MainButton } from "../index";
import "./section-wrapper.css";

export default function SectionWrapper(props) {
  let visibility;
  if(!props.button) visibility = "d-none";

  return (
    <div button={props.button} className="section-wrapper rounded-5 mt-5 position-relative">
      {props.children}
      <MainButton class={`${visibility} position-absolute section-wrapper-button`} reference="#" >
        {props.button}
      </MainButton>
    </div>
  );
};