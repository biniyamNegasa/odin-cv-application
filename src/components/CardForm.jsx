import "../styles/CardForm.css";

function CardForm({
  headingId,
  heading,
  subheadingId,
  subheading,
  whatToAdd,
  data,
  setData,
  currentId,
}) {
  const handleAdd = () => {
    setData({
      ...data,
      [headingId]: {
        ...data[headingId],
        detail: {
          ...data[headingId].detail,
          [Date.now()]: "",
        },
      },
    });
  };
  return (
    <div className="card-form">
      <div>
        <div>
          <label htmlFor={`${headingId}`}>{heading}</label>
          <input
            type="text"
            id={`${headingId}`}
            name={`${headingId}`}
            value={data[headingId][currentId].heading}
            onChange={(event) =>
              setData({
                ...data,
                [headingId]: {
                  ...data[headingId],
                  [currentId]: {
                    ...data[headingId][currentId],
                    heading: event.target.value,
                  },
                },
              })
            }
            required
          />
        </div>
        <div>
          <label htmlFor={`${subheadingId}`}>{subheading}</label>
          <input
            type="text"
            id={`${subheadingId}`}
            name={`${subheadingId}`}
            value={data[headingId][currentId].subheading}
            onChange={(event) =>
              setData({
                ...data,
                [headingId]: {
                  ...data[headingId],
                  [currentId]: {
                    ...data[headingId][currentId],
                    subheading: event.target.value,
                  },
                },
              })
            }
            required
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={data[headingId][currentId].startDate}
            onChange={(event) =>
              setData({
                ...data,
                [headingId]: {
                  ...data[headingId],
                  [currentId]: {
                    ...data[headingId][currentId],
                    startDate: event.target.value,
                  },
                },
              })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={data[headingId][currentId].endDate}
            onChange={(event) =>
              setData({
                ...data,
                [headingId]: {
                  ...data[headingId],
                  [currentId]: {
                    ...data[headingId][currentId],
                    endDate: event.target.value,
                  },
                },
              })
            }
            required
          />
        </div>
      </div>
      {Object.entries(data[headingId][currentId].detail || {}).map((det) => (
        <div key={det[0]}>
          <input
            type="text"
            id={det[0]}
            name={det[0]}
            value={det[1]}
            onChange={(event) =>
              setData({
                ...data,
                [headingId]: {
                  ...data[headingId],
                  [currentId]: {
                    ...data[headingId][currentId],
                    detail: {
                      ...data[headingId][currentId].detail,
                      [det[0]]: event.target.value,
                    },
                  },
                },
              })
            }
            required
          />
          <button
            type="button"
            onClick={() => {
              delete data[headingId][currentId].detail[det[0]];
              setData({ ...data });
            }}
          >
            Remove {whatToAdd}
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
