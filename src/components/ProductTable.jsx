import Spinner from "./Spinner";
import TableRow from "./TableRow";

const ProductTable = ({ productList, isLoading }) => {
  return (
    <div className="p-10 space-y-8 mx-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        Tabla de Productos
      </h2>
      <table className="bg-white rounded-2xl shadow w-full">
        <thead className="rounded-t-lg">
          <tr className=" text-gray-600 bg-purple-300 rounded-t-lg text-left text-base font-normal">
            <th className="py-4 px-6 rounded-tl-lg">Nombre</th>
            <th className="py-4 px-6">Original Price</th>
            <th className="py-4 px-6">Price</th>
            <th className="py-4 px-6">Title</th>
            <th className="py-4 px-6">Comisión</th>
            <th className="py-4 px-6">Costo Envío</th>
            <th className="py-4 px-6">IVA</th>
            <th className="py-4 px-6">Costo</th>
            <th className="py-2 px-4">Profit</th>
            <th className="py-2 px-4 rounded-tr-lg">New Price</th>
          </tr>
        </thead>
        <tbody className="relative">
          {isLoading ? (
            <div className="flex absolute items-center justify-center w-full h-80">
              <Spinner size="w-20" />
            </div>
          ) : productList.length === 0 ? (
            <div className="h-80">
              <div className="flex absolute items-center justify-center w-full h-80 text-gray-600 text-2xl font-bold">
                <p>No se encontraron productos</p>
              </div>
            </div>
          ) : (
            productList.map((product) => (
              <TableRow product={product} key={product.id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
