import { useMemo, useState } from "react";

const TableRow = ({ product }) => {
  const [newPrice, setNewPrice] = useState("");
  const { marketplaceData, internalData, name } = product;
  const { price, original_price, costo_envio, comision, title } =
    marketplaceData;
  const { iva, costo } = internalData;

  const handleChange = (e) => {
    setNewPrice(e.target.value);
  };

  const profit = useMemo(() => {
    const p = newPrice ? newPrice : price;
    const calculatedProfit = p - p * iva - costo_envio - comision;
    return calculatedProfit.toFixed(2);
  }, [price, iva, costo_envio, comision, newPrice]);
  return (
    <tr className="border border-gray-200 rounded-b-lg  hover:bg-gray-50 hover:rounded-2xl transition-colors text-base text-gray-500">
      <td className="py-2 px-4 font-bold text-black rounded-bl-lg">{name}</td>
      <td className="py-2 px-4">${original_price}</td>
      <td className="py-2 px-4">${price}</td>
      <td className="py-2 px-4">{title}</td>
      <td className="py-2 px-4">${comision}</td>
      <td className="py-2 px-4">${costo_envio}</td>
      <td className="py-2 px-4">{iva * 100}%</td>
      <td className="py-2 px-4">${costo}</td>
      <td className="py-2 px-4">${profit}</td>
      <td className="py-2 px-4 w-28">
        <input
          type="number"
          className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nuevo precio"
          onChange={handleChange}
        />
      </td>
    </tr>
  );
};

export default TableRow;
