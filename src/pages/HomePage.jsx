import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ContainerBox from "../components/ContainerBox";
import ContainerTitle from "../components/ContainerTitle";
import HomeImage from "../assets/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-monitor-screen-parcel.png";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="min-h-screen bg-gray-50 ">
        <div className=" bg-white shadow-xl p-10 space-y-8 flex flex-col items-center">
          <section className="max-w-6xl w-full flex flex-col md:flex-row items-center mb-10 ">
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <div className="flex gap-2 flex-col">
                <h2 className="text-xl md:text-2xl text-gray-600">
                  Hola, <span className="font-bold">{user.username}</span>
                </h2>
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">
                  ¡Bienvenido al Sistema de Gestión de Productos!
                </h1>
              </div>

              <p className="text-gray-700 text-base md:text-lg">
                Esta plataforma te permite administrar de manera centralizada
                toda la información relacionada con los productos que
                comercializas a través del marketplace.
              </p>
              <Link
                to="/calculos"
                className="flex items-center justify-center bg-purple-600 hover:bg-purple-400 shadow rounded-xl w-32 h-10 text-white font-bold cursor-pointer"
              >
                Calcular
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <img src={HomeImage} />
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-10 lg:px-20">
            <ContainerBox>
              <ContainerTitle>📦 ¿Qué hace este sistema?</ContainerTitle>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Integra datos del marketplace externo con tu sistema interno.
                </li>
                <li>
                  Guarda información como costos, IVA y estado del producto.
                </li>
                <li>Permite consultar y actualizar productos fácilmente.</li>
              </ul>
            </ContainerBox>

            <ContainerBox>
              <ContainerTitle>🔄 Funcionalidades principales</ContainerTitle>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Consultar listado actualizado de productos desde el
                  marketplace.
                </li>
                <li>Buscar productos por ID o nombre.</li>
                <li>
                  Actualizar información del producto (precio, comisión, envío).
                </li>
                <li>
                  Verificar y modificar el estado de productos
                  (activo/inactivo).
                </li>
              </ul>
            </ContainerBox>

            <ContainerBox>
              <ContainerTitle>🧱 Tecnología utilizada</ContainerTitle>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Backend:</strong> Node.js + Express.js
                </li>
                <li>
                  <strong>Base de datos:</strong> PostgreSQL
                </li>
                <li>
                  <strong>ORM:</strong> Sequelize
                </li>
                <li>
                  <strong>API simulada:</strong> para obtener datos del
                  marketplace
                </li>
              </ul>
            </ContainerBox>

            <ContainerBox>
              <ContainerTitle>🛠 Estructura del sistema</ContainerTitle>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-800 whitespace-pre-wrap">
                {`Usuario
  ↓
Backend Express
  ↓
Base de datos interna (productos, costos, IVA, etc.)
  ↔
API del Marketplace (datos de precios, comisiones, etc.)`}
              </div>
            </ContainerBox>

            <ContainerBox>
              <ContainerTitle>👥 ¿Quién puede usarlo?</ContainerTitle>
              <ul className="list-disc list-inside text-gray-700">
                <li>Personal administrativo</li>
                <li>Área de ventas</li>
                <li>Departamento de finanzas</li>
                <li>Operaciones / logística</li>
              </ul>
            </ContainerBox>

            <ContainerBox>
              <ContainerTitle>💡 Recomendaciones</ContainerTitle>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Ejecutar actualizaciones periódicas desde el marketplace.
                </li>
                <li>Verificar costos internos y márgenes de ganancia.</li>
                <li>
                  Mantener sincronización para evitar errores de stock o precio.
                </li>
              </ul>
            </ContainerBox>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
