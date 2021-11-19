import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for adding new product
  const onSubmit = (data) => {
    fetch("https://thawing-forest-88832.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Successfully Added");

          reset();
        }
      });
  };

  return (
    <div>
      <h2 className="text-center">Add A New Product</h2>
      <div className="pb-5 pt-3">
        {/* form for adding new product */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Product Name"
            className="service-input"
          />
          <br />
          <input
            {...register("description")}
            placeholder="Product Description"
            className="service-input"
          />
          <br />

          <input
            {...register("img", { required: true })}
            placeholder="Product Image Link"
            className="service-input"
          />
          <br />
          <input
            {...register("price", { required: true })}
            placeholder="Product Price"
            type="number"
            className="service-input"
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Add Service" className="btn btn-submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
