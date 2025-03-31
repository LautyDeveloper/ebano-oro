import { ListOfPlates } from "./ListOfPlates"

export const Platos = () => {
    return (
        <section>
        <ListOfPlates 
            phrase={"pequeños detalles"}
            title={"ENTRADAS..."}
            image={""}
            platos={[
                {title: "Carpaccio de Res", desc: "Láminas finas con aderezo cítrico.", price:"$12.000"},
                {title: "Tartare de Salmón", desc: "Frescura y elegancia en cada bocado.", price:"$15.500"},
                {title: "Bruschettas de Prosciutto y Burrata", desc: "Texturas y sabores equilibrados.", price:"$11.000"},
                {title: "Sopa de Cebolla Gratinada", desc: "Receta clásica con un toque gourmet.", price:"$10.000"},
                {title: "Ensalada de Peras, Gorgonzola y Nueces", desc: "Dulce, salado y crocante en armonía.", price:"$13.000"}
            ]}
            invested={false}
        />
    </section>
    )
}