import AuthImage from "../assets/product-manager-concept-illustration.png";

const ContainerLogin = (props) => {
  return (
    <div className="box bg-purple-400 h-screen flex items-center justify-center">
      <div className="container w-5/6 min-h-80 flex flex-col md:flex-row rounded h-auto items-center md:items-stretch">
        <div className="bg-white flex items-center flex-col w-11/12 md:w-1/2 gap-2 rounded-2xl md:rounded-none shadow-2xl md:rounded-l-2xl justify-between p-6 md:p-10 lg:p-20">
          {props.children}
        </div>
        <div className="bg-purple-300 w-11/12 md:w-1/2 p-8 rounded-r-2xl hidden md:flex items-center justify-center">
          <img src={AuthImage} className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default ContainerLogin;
