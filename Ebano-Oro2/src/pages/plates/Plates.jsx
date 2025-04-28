import { PlatesList } from "./components/plates-list/PlatesList";
import { useFetchPlates } from "../../hooks/useFetchPlates";
import entradasImageUrl from "../../assets/media/content/entradas.png";
import principalesImageUrl from "../../assets/media/content/principales.png";
import postresImageUrl from "../../assets/media/content/postres.png";
import "./plates.css";
export const Plates = () => {
  const { platos: entradas, loading: loadingEntradas } =
    useFetchPlates("entradas");
  const { platos: principales, loading: loadingPrincipales } =
    useFetchPlates("principales");
  const { platos: postres, loading: loadingPostres } =
    useFetchPlates("postres");

  if (loadingEntradas || loadingPrincipales || loadingPostres)
    return <p>Cargando...</p>;

  return (
    <section className="platos-section" id="platos">
      <PlatesList
        phrase="pequeños detalles"
        title="ENTRADAS"
        image={entradasImageUrl}
        platos={entradas}
        invested={false}
      />
      <PlatesList
        phrase="excelencia y perfección en cada uno"
        title="PLATOS PRINCIPALES"
        image={principalesImageUrl}
        platos={principales}
        invested={true}
      />
      <PlatesList
        phrase="delicadeza"
        title="POSTRES"
        image={postresImageUrl}
        platos={postres}
        invested={false}
      />
    </section>
  );
};
