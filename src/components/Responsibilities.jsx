import "../styles/Responsibilities.css";

function Responsibilities({ responsibilities }) {
  return (
    <ul>
      {Object.entries(responsibilities).map((responsibility) => (
        <li key={responsibility[0]}>{responsibility[1]}</li>
      ))}
    </ul>
  );
}

export default Responsibilities;
