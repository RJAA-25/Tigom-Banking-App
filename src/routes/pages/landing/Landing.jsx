import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../components/navigation/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="flex grow bg-landing bg-cover bg-center bg-no-repeat">
        <div className="grid grow grid-cols-5 place-content-stretch bg-gradient-to-r from-gray-50 via-transparent to-transparent">
          <div className="col-span-5 px-10 pt-32 text-3xl md:px-20 md:text-4xl lg:col-span-4 lg:px-36 lg:text-5xl">
            <div className="lg:7xl mb-5 flex gap-2 text-5xl md:mb-8 md:text-6xl lg:mb-10">
              <Icon icon={faSeedling} className="text-lime-500" />
              <span className="font-extrabold lowercase tracking-tight text-stone-700">
                tigom
              </span>
            </div>
            <p className="my-3 font-extrabold tracking-tight md:my-4 lg:my-5">
              <span className="text-lime-600">Grow</span> your savings.
            </p>
            <p className="my-3 font-extrabold tracking-tight md:my-4 lg:my-5">
              <span className="text-lime-600">Secure</span> your future.
            </p>
            <div className="my-5 flex gap-5 md:my-8 lg:my-10">
              <Link
                to="/sign-up"
                className="btn-primary btn px-10 md:px-12 lg:px-16"
              >
                Sign Up
              </Link>
              <Link
                to="/sign-in"
                className="btn-secondary btn px-10 md:px-12 lg:px-16"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
