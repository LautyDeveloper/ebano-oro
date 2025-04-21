import "./plates-list.css";
export const PlatesList = ({ phrase, title, image, platos, invested }) => {
  return (
    <div className={`platos ${invested ? "platos-black" : "platos-blue"}`}>
      <div className={`platos-container ${invested ? "invested" : ""}`}>
        <img src={image} alt={`Imagen de ${title}`} />
        <div className="plato-info">
          <div className="plato-info-header">
            <p className="plato-info-phrase phrase">{phrase}</p>
            <h2 className="plato-info-title">{title}</h2>
          </div>
          <div className="platos-list">
            {platos.map((plato, index) => {
              return (
                <div className="platos-item" key={plato.id || index}>
                  <div className="platos-item-header">
                    <h3 className="platos-item-header-title">{plato.title}</h3>
                    <p className="platos-item-header-desc parragraph">{plato.desc}</p>
                  </div>
                  <span className="platos-item-price">${plato.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
