import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
    const {user}=useAuth()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for adding review
  const onSubmit = (data) => {
    fetch("http://localhost:5000/reviews", {
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
      <h2 className="text-center">Write Your Review Here</h2>
      <div className="pb-5 pt-3">
        {/* form for adding new review */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="service-input"
            required
            defaultValue={user.displayName}
          />
          <br />
          <input
            {...register("review")}
            placeholder="Your Feedback"
            className="service-input"
            required
          />

          <br />
          <select required {...register("rating")}  className="service-input" placeholder='Give Your Rating'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Submit" className="btn btn-submit" />
        </form>
      </div>
    </div>
  );
};

export default Review;
