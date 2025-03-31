export const ListOfPlates = ({phrase, title, image, platos, invested}) => {
    return(
        <div className={`platos-container ${invested ? "invested" : ""}`}>
        <img src={image} alt={`Imagen de ${title}`} />
        <div className="plato-info">
            <p className="plato-phrase">{phrase}</p>
            <h2 className="plato-title">{title}</h2>
            <div className="platos-list">
                {platos.map(plato => {
                    <div className="platos-item">
                        <h3 className="platos-item-title">{plato.title}</h3>
                        <p className="platos-item-desc">{plato.desc}</p>
                        <span className="platos-item-price">{plato.price}</span>
                    </div>
                })}
            </div>
        </div>
    </div>
    )
}