import TitleDate from "./TitleDate";
import Title from "./Title";
import Responsibilities from "./Responsibilities";
import "../styles/Card.css";

function Card({ name, title, startDate, endDate, responsibilities }) {
  return (
    <div className="card">
      <TitleDate startDate={startDate} endDate={endDate}>
        <Title name={name} title={title} />
      </TitleDate>
      <Responsibilities responsibilities={responsibilities} />
    </div>
  );
}

export default Card;
