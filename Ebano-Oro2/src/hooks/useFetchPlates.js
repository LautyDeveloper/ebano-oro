import { useEffect, useState } from "react";

export const useFetchPlates = (categoria) => {
  const [platos, setPlatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlatos = async () => {
      try {
        const res = await fetch(`http://localhost:3000/platos/${categoria}`);
        const data = await res.json();
        setPlatos(data);
      } catch (error) {
        console.error("Error fetching platos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlatos();
  }, [categoria]);

  return { platos, loading };
};
