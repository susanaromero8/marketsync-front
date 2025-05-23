const InputField = ({ type, placeholder, register, error, small }) => (
  <div className={small && "flex flex-col w-1/2"}>
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-gray-200 p-2 rounded w-full ${
        error ? "border border-red-500" : "border-none"
      }`}
      {...register}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
export default InputField;
