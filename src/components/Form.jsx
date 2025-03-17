import "../styles/Form.css";
import WebsiteInput from "./WebsiteInput";
import { useState } from "react";
import AnotherDetail from "./AnotherDetail";
import defaultDetails from "../assets/defaultDetails";

function Form({ setPage }) {
  const [allDetails, setAllDetails] = useState(
    JSON.parse(localStorage.getItem("allDetails")) || defaultDetails,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("allDetails", JSON.stringify(allDetails));
    setPage("home");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="heading-form">
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={allDetails.name}
            onChange={(event) =>
              setAllDetails({ ...allDetails, name: event.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={allDetails.title}
            onChange={(event) =>
              setAllDetails({ ...allDetails, title: event.target.value })
            }
            required
          />
        </div>
      </div>
      <div>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={allDetails.email}
            onChange={(event) =>
              setAllDetails({ ...allDetails, email: event.target.value })
            }
            required
          />
        </div>
        <WebsiteInput name="github" obj={allDetails} setObj={setAllDetails} />
        <WebsiteInput name="linkedin" obj={allDetails} setObj={setAllDetails} />
        <WebsiteInput name="twitter" obj={allDetails} setObj={setAllDetails} />
        <WebsiteInput name="telegram" obj={allDetails} setObj={setAllDetails} />
      </div>
      <div>
        <p>Education</p>
        <AnotherDetail
          headingId="education"
          heading="Major of Study"
          subheadingId="institution"
          subheading="Institution"
          whatToAdd="Detail"
          details={allDetails}
          setDetails={setAllDetails}
        />
      </div>
      <div>
        <p>Professional Experience</p>
        <AnotherDetail
          headingId="experience"
          heading="Position"
          subheadingId="position"
          subheading="Company Name"
          whatToAdd="Responsibility"
          details={allDetails}
          setDetails={setAllDetails}
        />
      </div>
      <div>
        <p>Projects</p>
        <AnotherDetail
          headingId="project"
          heading="Project Name"
          subheadingId="projectDescription"
          subheading="Project Description"
          whatToAdd="Responsibility"
          details={allDetails}
          setDetails={setAllDetails}
        />
      </div>
      <div>
        <div className="submit-button">
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
