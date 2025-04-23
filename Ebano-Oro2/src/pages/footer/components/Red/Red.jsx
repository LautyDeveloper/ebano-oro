import "./Red.css";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const icons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
};

export const Red = ({ name, url }) => {
  const Icon = icons[name.toLowerCase()]; // Agarramos el componente según el nombre

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="red-link"
    >
      {Icon ? <Icon className="red-link-icon" /> : <i>{name}</i>}
    </a>
  );
};
