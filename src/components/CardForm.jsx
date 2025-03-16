import { useState } from "react";

function CardForm({ headingId, heading, subheadingId, subheading, whatToAdd }) {
  const [details, setDetails] = useState({});
  const handleAdd = () => {
    setDetails({ ...details, [Date.now()]: "" });
  };
  return (
    <div>
      <div>
        <label htmlFor={`${headingId}`}>{heading}</label>
        <input type="text" id={`${headingId}`} name={`${headingId}`} />
        <label htmlFor={`${subheadingId}`}>{subheading}</label>
        <input type="text" id={`${subheadingId}`} name={`${subheadingId}`} />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" name="startDate" />
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" name="endDate" />
      </div>
      {Object.entries(details).map((detail) => (
        <div key={detail[0]}>
          <input
            type="text"
            id={detail[0]}
            name={detail[0]}
            value={detail[1]}
            onChange={(event) =>
              setDetails({ ...details, [detail[0]]: event.target.value })
            }
          />
          <button
            type="button"
            onClick={() => {
              delete details[detail[0]];
              setDetails({ ...details });
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd}>
        Add New {whatToAdd}
      </button>
    </div>
  );
}

export default CardForm;
