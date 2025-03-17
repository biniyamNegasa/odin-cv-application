import "../styles/ExternalLink.css";

function ExternalLink({ url, children }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ExternalLink;
