import CardForm from "./CardForm";

function AnotherDetail({
  headingId,
  heading,
  subheadingId,
  subheading,
  whatToAdd,
  details,
  setDetails,
}) {
  const handleAdd = () => {
    setDetails({
      ...details,
      [headingId]: {
        ...details[headingId],
        [Date.now()]: {
          heading: "",
          subheading: "",
          startDate: "",
          endDate: "",
          detail: {
            [Date.now()]: "",
          },
        },
      },
    });
  };
  return (
    <>
      <div className="content-section">
        {Object.entries(details[headingId] || {}).map((detail) => (
          <div key={detail[0]}>
            <CardForm
              headingId={headingId}
              heading={heading}
              subheadingId={subheadingId}
              subheading={subheading}
              whatToAdd={whatToAdd}
              data={details}
              setData={setDetails}
              currentId={detail[0]}
            />
            <button
              type="button"
              onClick={() => {
                delete details[headingId][detail[0]];
                setDetails({ ...details });
              }}
            >
              Remove {headingId.charAt(0).toUpperCase() + headingId.slice(1)}
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAdd}>
        Add New {headingId.charAt(0).toUpperCase() + headingId.slice(1)}
      </button>
    </>
  );
}

export default AnotherDetail;
