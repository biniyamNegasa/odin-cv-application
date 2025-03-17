import "../styles/TitleDate.css";

function TitleDate({ children, startDate, endDate }) {
  return (
    <div className="title-date">
      {children}
      <p>
        {startDate} - {endDate}
      </p>
    </div>
  );
}

export default TitleDate;
