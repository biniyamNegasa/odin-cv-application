import "../styles/TitleDate.css";

function TitleDate({ children, startDate, endDate }) {
  startDate = new Date(startDate).toLocaleDateString("en-GB");
  endDate = new Date(endDate).toLocaleDateString("en-GB");
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
