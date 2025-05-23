import "./target.css";
export const Target = ({ image, title, parragraph }) => {
    return (
        <div className="target">
        <img src={image} alt="" />
            <div className="target-text">
                <h3>{title}</h3>
                <p className="parragraph">{parragraph}</p>
            </div>
        </div>
    );
};
