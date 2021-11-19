import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Rating from "react-rating";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  // Getting all Reviews
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>

      <h1 className='text-center my-3 pb-3'>Our Customers Feedback</h1>
      <div className=" bg-dark">
        <div className="container text-light p-5">
          <div className="row ">
            <div className=" review-slider">
            {/* Main carasoul to show review */}
              <Carousel>
                {reviews.map((review) => (
                  <Carousel.Item key={review._id}>
                    <div className="slider ">
                      <div className="reviews-info text-center">
                        <h3 className=" mb-3 text-warning">
                          <strong>{review.name}</strong>
                        </h3>
                        <h5>
                          <span className="me-2 ">Ratings : </span>
                          <Rating
                            className="rating text-warning"
                            emptySymbol="far fa-star  text-warning"
                            fullSymbol="fas fa-star  text-warning"
                            readonly
                            initialRating={review.rating}
                          ></Rating>
                        </h5>
                        <p className="col-md-6 d-inline-block  my-5 fw-bold">
                          {review.review}
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
