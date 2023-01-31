import BarLoader from "react-spinners/BarLoader";

const Loader: React.FC = () => {
  return (
    <div className="loader__container">
      <BarLoader color="#3195ff" />
    </div>
  );
};

export default Loader;
