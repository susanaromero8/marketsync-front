import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ContainerLogin from "../components/ContainerLogin";
import { registerSchema } from "../schemas/registerSchema";
import Spinner from "../components/Spinner";
import InputField from "../components/InputField";
import { useRegister } from "../hooks/useRegister";

const CreateAccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { registerUser, loading, error } = useRegister();
  const onSubmit = (data) => registerUser(data);
  return (
    <ContainerLogin>
      <div className="m-2 w-full flex items-center flex-col gap-10">
        <h2 className="text-4xl font-bold md:mb-8 w-full text-center text-gray-600">
          Crear una cuenta
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              <InputField
                type="text"
                placeholder="Nombre"
                register={register("name")}
                error={errors.name?.message}
                small={true}
              />
              <InputField
                type="text"
                placeholder="Apellido"
                register={register("last_name")}
                error={errors.last_name?.message}
                small={true}
              />
            </div>
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
            <InputField
              type="password"
              placeholder="Confirmar Contraseña"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 h-8 cursor-pointer text-white"
            disabled={loading}
          >
            {loading ? <Spinner size="w-6" /> : "Crear una cuenta"}
          </button>
        </form>
        {loading && (
          <p className="text-green-600 text-sm">"Creando Usuario...</p>
        )}
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div className="text-sm mt-2 text-center">
        <div className="flex flex-col gap-2 md:flex-row space-x-1 text-sm md:text-base">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/" className="text-blue-600 underline">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </ContainerLogin>
  );
};

export default CreateAccountPage;
