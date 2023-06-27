import "./profile-details.css";

export default function ProfileDetails(props) {
  return (
    <li>
      {props.var}
      <span>{props.val}</span>
    </li>
  )
}
