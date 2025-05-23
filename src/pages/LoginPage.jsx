import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import ContainerLogin from "../components/ContainerLogin";
import { loginSchema } from "../schemas/loginSchema";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";
import InputField from "../components/InputField";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const { login, loading, error } = useLogin();
  const onSubmit = ({ username, password }) => login(username, password);

  return (
    <>
      <ContainerLogin>
        <div className="m-2 w-full flex items-center flex-col gap-10">
          <h2 className="text-4xl font-bold md:mb-8 w-full text-center text-gray-600">
            Iniciar Sesión
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 w-full">
              <InputField
                type="email"
                placeholder="Correo Electronico"
                register={register("username")}
                error={errors.username?.message}
              />
              <InputField
                type="password"
                placeholder="Contraseña"
                register={register("password")}
                error={errors.password?.message}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 h-8 cursor-pointer text-white"
            >
              {loading ? <Spinner size="w-6" /> : "Iniciar sesión"}
            </button>
          </form>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="text-sm mt-2 text-center">
          <div className="flex flex-col gap-2 md:flex-row space-x-1 text-sm md:text-base">
            <p>¿No tienes una cuenta?</p>
            <Link to="/register" className="text-blue-600 underline">
              Crear una cuenta nueva
            </Link>
          </div>
        </div>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
