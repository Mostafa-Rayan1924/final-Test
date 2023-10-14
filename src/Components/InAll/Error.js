import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen bg-slate-800 grid place-content-center place-items-center">
      <h1 className="mb-4 text-white text-3xl lg:text-5xl">
        <span className="text-red-500">Error 404</span> Page not found
      </h1>
      <Link className="bg-[#f5c000] text-white px-6 py-2 rounded-lg" to={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default Error;
