import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [products, setProducts] = useState(null);
  const { user } = useAuth();
  const email = user.email;

  // get orders of logged user
  useEffect(() => {
    fetch(`https://thawing-forest-88832.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // cancelling order with id
  const handleCancel = (id) => {
    const action = window.confirm("Do you want to cancel the product?");
    if (action) {
      fetch(`https://thawing-forest-88832.herokuapp.com/delteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center">Your Orders</h2>
      {/* spinner */}
      {!products && (
        <div class="d-flex justify-content-center">
          <div class="spinner-grow my-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-2 row-cols-md-4 g-5">
        {products?.map((pd) => (
          <div key={pd._id} className="col">
            <div className="card h-100">
              <img
                src={pd?.img}
                style={{ height: "200px", objectFit: "cover" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{pd?.name}</h3>

                <h5>$ {pd?.price}</h5>
                <p>Status: "{pd?.status}"</p>

                <button
                  onClick={() => handleCancel(pd?._id)}
                  className="btn btn-danger float-end"
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
