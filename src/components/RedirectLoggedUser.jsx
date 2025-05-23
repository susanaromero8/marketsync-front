import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";

const RedirectLoggedUser = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <Spinner size="w-26" />
      </div>
    );
  if (user) return <Navigate to="/home" />;

  return <Outlet />;
};

export default RedirectLoggedUser;
