import { useFetchTests } from "../../hooks/useFetchTests";
import { TestimonialCard } from "./components/TestimonialCard";
import { useState } from "react";
import "./testimonials.css";

export const Testimonials = () => {
  const { tests, loading, error } = useFetchTests();
  const [index, setIndex] = useState(0);

  const next = () => {
    if (tests && index < tests.length - 1) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (tests && index > 0) setIndex((prev) => prev - 1);
  };

  if (loading) return <p>Cargando testimonios...</p>;
  if (error) return <p>Error cargando testimonios</p>;

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Lo que dicen nuestros comensales</h2>

      <div className="testimonial-nav">
        <button onClick={prev} disabled={index === 0}>
          ⬅️
        </button>
        <TestimonialCard testimonio={tests[index]} />
        <button onClick={next} disabled={index === tests.length - 1}>
          ➡️
        </button>
      </div>
    </section>
  );
};
