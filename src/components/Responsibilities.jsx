import "../styles/Responsibilities.css";

function Responsibilities({ responsibilities }) {
  return (
    <ul>
      {responsibilities.map((responsibility) => (
        <li>{responsibility}</li>
      ))}
    </ul>
  );
}

export default Responsibilities;
