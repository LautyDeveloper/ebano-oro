import { ListOfPlates } from "./ListOfPlates";
import "./Platos.css";
export const Platos = () => {
  return (
    <section className="platos-section">
      <ListOfPlates
        phrase={"pequeños detalles"}
        title={"ENTRADAS..."}
        image={""}
        platos={[
          {
            title: "Carpaccio de Res",
            desc: "Láminas finas con aderezo cítrico.",
            price: "$12.000",
          },
          {
            title: "Tartare de Salmón",
            desc: "Frescura y elegancia en cada bocado.",
            price: "$15.500",
          },
          {
            title: "Bruschettas de Prosciutto y Burrata",
            desc: "Texturas y sabores equilibrados.",
            price: "$11.000",
          },
          {
            title: "Sopa de Cebolla Gratinada",
            desc: "Receta clásica con un toque gourmet.",
            price: "$10.000",
          },
          {
            title: "Ensalada de Peras, Gorgonzola y Nueces",
            desc: "Dulce, salado y crocante en armonía.",
            price: "$13.000",
          },
        ]}
        invested={false}
      />

      <ListOfPlates
        phrase={"excelencia y perfeccion en cada uno"}
        title={"PLATOS PRINCIPALES..."}
        image={""}
        platos={[
          {
            title: "Filet Mignon con Puré Trufado",
            desc: "Jugoso, tierno y con un toque de trufa.",
            price: "$25.000",
          },
          {
            title: "Risotto de Mariscos",
            desc: "Cremoso, lleno de mar y sabor.",
            price: "$22.500",
          },
          {
            title: "Pato Confitado con Reducción de Oporto",
            desc: "Tradición francesa con un giro moderno.",
            price: "$27.000",
          },
          {
            title: "Ravioles de Langosta con Salsa de Azafrán",
            desc: "Pasta artesanal y mariscos exquisitos.",
            price: "$24.000",
          },
          {
            title: "Costillar de Cordero con Puré de Batatas",
            desc: "Cocción lenta para un sabor inigualable.",
            price: "$26.500",
          },
        ]}
        invested={true}
      />

      <ListOfPlates
        phrase={"delicadeza"}
        title={"POSTRES..."}
        image={""}
        platos={[
          {
            title: "Crème Brûlée de Vainilla",
            desc: "Clásico, crocante y sedoso.",
            price: "$9.000",
          },
          {
            title: "Pavlova de Frutas Tropicales",
            desc: "Intensidad de chocolate con frescura frutal.",
            price: "$10.500",
          },
          {
            title: "Tarta de Chocolate Belga y Frambuesas",
            desc: "Ligera, crujiente y llena de frescura.",
            price: "$11.000",
          },
          {
            title: "Milhojas de Dulce de Leche y Almendras",
            desc: "Capas crocantes con relleno cremoso.",
            price: "$10.000",
          },
          {
            title: "Cheesecake de Maracuyá y Mango",
            desc: "Dulzura y acidez en perfecto balance.",
            price: "$9.800",
          },
        ]}
        invested={false}
      />
    </section>
  );
};
