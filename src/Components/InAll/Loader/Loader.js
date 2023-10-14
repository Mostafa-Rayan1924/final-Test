import "./Loader.css";
const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 z-[1000] -translate-y-1/2 bg-black/40 w-full h-screen flex justify-center items-center">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
