import { PlatesList } from "./components/plates-list/PlatesList";
import { useFetchPlates } from "../../hooks/useFetchPlates";
import "./plates.css";
export const Plates = () => {
  const { platos: entradas, loading: loadingEntradas } = useFetchPlates("entradas");
  const { platos: principales, loading: loadingPrincipales } = useFetchPlates("principales");
  const { platos: postres, loading: loadingPostres } = useFetchPlates("postres");

  if (loadingEntradas || loadingPrincipales || loadingPostres) return <p>Cargando...</p>;

  return (
    <section className="platos-section">
      <PlatesList
        phrase="pequeños detalles"
        title="ENTRADAS..."
        image={null}
        platos={entradas}
        invested={false}
      />
      <PlatesList
        phrase="excelencia y perfección en cada uno"
        title="PLATOS PRINCIPALES..."
        image={null}
        platos={principales}
        invested={true}
      />
      <PlatesList
        phrase="delicadeza"
        title="POSTRES..."
        image={null}
        platos={postres}
        invested={false}
      />
    </section>
  );
};
