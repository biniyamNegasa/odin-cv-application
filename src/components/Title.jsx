import "../styles/Title.css";

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function Title({ name, title }) {
  return (
    <div className="title">
      <h2>{toTitleCase(name)}</h2>
      <h4>{toTitleCase(title)}</h4>
    </div>
  );
}

export default Title;
