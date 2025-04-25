import { useState, useEffect } from "react";

export function useFetchTests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/tests")
      .then((res) => {
        if (!res.ok) throw new Error("Error al traer los testimonios");
        return res.json();
      })
      .then((data) => {
        setTests(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { tests, loading, error };
}
