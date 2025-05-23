import { Link } from "react-router-dom";
import NotFoundImage from "../assets/bug-fixing-concept-illustration.png";

const PageNotFound = () => {
  return (
    <>
      <div className="h-screen bg-purple-300">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 p-10 h-screen">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-4xl md:text-6xl text-white font-extrabold">
              OOPS!
            </h2>
            <p className="text-2xl md:text-4xl text-gray-600">
              PAGE <span className="font-bold">NOT FOUND</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-600 ">ERROR 404</p>
          </div>

          <div className="w-3/4 min-w-xs md:w-2/4 lg:w-1/4 h-auto">
            <img src={NotFoundImage} />
          </div>
          <Link
            className="rounded shadow hover:bg-purple-900 bg-purple-600 p-2 text-white w-30 h-auto text-center font-bold uppercase"
            to="/home"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
