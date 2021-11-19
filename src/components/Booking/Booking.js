import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./Booking.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Booking = () => {
  const { productId } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState({});

  // for getting specific order
  useEffect(() => {
    fetch(`https://thawing-forest-88832.herokuapp.com/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "pending";
    data.name = product.name;
    data.description = product.description;
    data.price = product.price;
    data.img = product.img;

    // sending to data base
    fetch("https://thawing-forest-88832.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Successful");
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div>
      <Header></Header>
      <div className="container my-5">
        {/* product area */}
        <div className="row gx-2 gy-5">
          <div className="col-md-6 col-12">
            <div key={product?._id} className="col">
              <div className="card h-100">
                <img
                  src={product?.img}
                  style={{ height: "400px", objectFit: "cover" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2 className="card-title">{product?.name}</h2>
                  <p className="card-text">{product?.description}</p>
                  <h4>$ {product?.price}</h4>
                </div>
              </div>
            </div>
          </div>
          {/* form area */}
          <div className="col-md-6 col-12">
            <h2 className="text-center">Confirm Your Order</h2>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                defaultValue={user.displayName}
                {...register("displayName")}
                className="product-input"
              />

              <input
                type="email"
                defaultValue={user.email}
                {...register("email")}
                className="product-input"
              />

              <input
                placeholder="Mobile"
                type="tel"
                {...register("mobile")}
                className="product-input"
              />
              <input
                placeholder="Address"
                type="text"
                {...register("address")}
                className="product-input"
              />
              <input
                type="submit"
                value="Order Now"
                className="btn btn-submit"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
