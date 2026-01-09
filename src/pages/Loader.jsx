import "../styles/loader.scss";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="bg-reveal" />

      <div className="loader-content">
        <div className="circle-loader" />

        <div className="brand-text">
          STRIVE <span>EDGE</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
