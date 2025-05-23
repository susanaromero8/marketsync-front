import { useLoadProduct } from "../hooks/useLoadProduct";
import ProductTable from "../components/ProductTable";

const CalculosPage = () => {
  const { productList, isLoading } = useLoadProduct();
  return (
    <>
      <div className=" h-screen bg-gray-50">
        <ProductTable productList={productList} isLoading={isLoading} />
      </div>
    </>
  );
};

export default CalculosPage;
