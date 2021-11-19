import React from "react";
import error from "../../img/error.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Error = () => {
  return (
    <div>
      <Header></Header>
      <div className="text-center">
        <img
          src={error}
          className="img-fluid"
          style={{ maxHeight: "500px" }}
          alt=""
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
