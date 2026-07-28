import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest mb-4 text-mistdim">
        404
      </p>
      <h1 className="font-display text-2xl font-semibold mb-4">
        This page doesn't exist.
      </h1>
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest text-blue"
      >
        Back to home
      </Link>
    </section>
  );
};
