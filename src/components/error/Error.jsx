import { useNavigate, useRouteError } from "react-router-dom";
import Header from "../navigation/Header";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="max-w-screen flex min-h-screen flex-col">
      <Header />
      <div className="flex grow bg-sign bg-cover bg-center bg-no-repeat">
        <div className="grow bg-base-200 bg-opacity-50 p-5 backdrop-blur-sm lg:p-10">
          <div className="mx-auto max-w-lg rounded-lg bg-white p-10 text-center shadow-lg">
            <span className="block text-8xl font-extrabold text-secondary">
              {error.status}
            </span>
            <span className="block font-bold">{error.statusText}</span>
            <button className="btn-accent btn mt-10" onClick={handleClick}>
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
