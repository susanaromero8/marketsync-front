import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";

const RedirectUnloggedUser = () => {
  const { user, loading } = useAuth();

  console.log("private", user, loading);

  if (loading)
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <Spinner size="w-26" />
      </div>
    );
  if (!user) return <Navigate to="/" />;

  return <Outlet />;
};

export default RedirectUnloggedUser;
