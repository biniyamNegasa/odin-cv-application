import TitleDate from "./TitleDate";
import Title from "./Title";
import Responsibilities from "./Responsibilities";
import "../styles/Card.css";

function Card({ heading, subheading, startDate, endDate, detail }) {
  return (
    <div className="card">
      <TitleDate startDate={startDate} endDate={endDate}>
        <Title name={heading} title={subheading} />
      </TitleDate>
      <Responsibilities responsibilities={detail} />
    </div>
  );
}

export default Card;
