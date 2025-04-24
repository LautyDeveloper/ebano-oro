import "./section-title.css";
export const SectionTitle = ({ title, phrase }) => {
  return (
    <div className="section-title-container">
      <h2 className="phrase-section">{phrase}</h2>
      <h3 className="title-section">{title}</h3>
    </div>
  );
};
