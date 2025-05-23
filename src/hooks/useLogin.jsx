import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", { username, password });
      localStorage.setItem("accessToken", data.accessToken);
      checkAuth();
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
