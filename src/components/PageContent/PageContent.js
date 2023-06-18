import "./page-content.css"

function PageContent(props) {
  return(
    <div className="page-content rounded-5">{props.children}</div>
  );
}

export default PageContent;