import Heading from "./Heading";
import Card from "./Card";

function isObjectEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function Home({ setPage }) {
  const allDetails = JSON.parse(localStorage.getItem("allDetails"));
  const handleClick = () => {
    setPage("form");
  };
  return (
    <div className="home">
      <button onClick={handleClick}>Edit</button>
      <Heading {...allDetails} />
      <div>
        {!isObjectEmpty(allDetails.education) && <h2>Education</h2>}
        {Object.entries(allDetails.education).map((education) => (
          <Card key={education[0]} {...education[1]} />
        ))}
      </div>
      <div>
        {!isObjectEmpty(allDetails.experience) && (
          <h2>Professional Experience</h2>
        )}
        {Object.entries(allDetails.experience).map((experience) => (
          <Card key={experience[0]} {...experience[1]} />
        ))}
      </div>
      <div>
        {!isObjectEmpty(allDetails.project) && <h2>Projects</h2>}
        {Object.entries(allDetails.project).map((project) => (
          <Card key={project[0]} {...project[1]} />
        ))}
      </div>
    </div>
  );
}

export default Home;
