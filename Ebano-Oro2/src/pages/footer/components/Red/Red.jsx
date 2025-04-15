import "./Red.css";

export const Red = ({ name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="red-link"
    >
      <i>{name}</i>
    </a>
  );
};
