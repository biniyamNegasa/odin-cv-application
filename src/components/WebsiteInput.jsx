import "../styles/WebsiteInput.css";

function WebsiteInput({ name, obj, setObj }) {
  name = name.toLowerCase();
  const cap = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="website-input">
      <p>{cap}</p>
      <div>
        <label htmlFor={name}>{cap} Username</label>
        <input
          type="text"
          id={name}
          name={name}
          value={obj[name].username}
          onChange={(event) =>
            setObj({
              ...obj,
              [name]: { ...obj[name], username: event.target.value },
            })
          }
          required
        />
      </div>
      <div>
        <label htmlFor={name + "Url"}>{cap} URL</label>
        <input
          type="url"
          id={name + "Url"}
          name={name + "Url"}
          value={obj[name].url}
          onChange={(event) =>
            setObj({
              ...obj,
              [name]: { ...obj[name], url: event.target.value },
            })
          }
          required
        />
      </div>
    </div>
  );
}

export default WebsiteInput;
