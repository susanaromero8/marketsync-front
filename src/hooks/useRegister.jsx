import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export const useRegister = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const registerUser = async (data) => {
    console.log(data);
    const { username, password, name, last_name, confirmPassword } = data;
    setLoading(true);
    try {
      const response = await api.post(`/register`, {
        username,
        password,
        confirmPassword,
        name,
        last_name,
      });

      console.log(`Registro exitoso`, response.data);

      checkAuth();

      navigate("/home");
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError(err.response?.data?.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};
