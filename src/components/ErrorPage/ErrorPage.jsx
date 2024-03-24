import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-12">
      <h1 className="text-3xl mb-4">Oops </h1>
      <p>Something error ocoured</p>
      <NavLink to={-1}>
        <button className="btn btn-primary my-4">Go Back</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
