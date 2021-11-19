import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState(null);
  const [isApproved, setIsApproved] = useState(false);

  // getting all orders
  useEffect(() => {
    fetch("https://thawing-forest-88832.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isApproved]);

  // deleting order with id

  const handleDelete = (id) => {
    const action = window.confirm("Do you want to cancel the product?");
    if (action) {
      fetch(`https://thawing-forest-88832.herokuapp.com/delteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled successfully");
            const remaining = allOrders.filter((product) => product._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };
  // updating order status
  const handleStatus = (id) => {
    fetch(`https://thawing-forest-88832.herokuapp.com/allOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Order Shipped");
          setIsApproved(true);
        }
      });
  };
  return (
    <div>
      <div className="container my-3">
        {allOrders && (
          <h1 className="text-center">Total Orders: {allOrders.length}</h1>
        )}

        {!allOrders && (
          <div class="d-flex justify-content-center my-5 pb-5">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="services">
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {allOrders?.map((order) => (
              <div key={order._id} className="col">
                <div className="card h-100">
                  <img
                    src={order?.img}
                    style={{ height: "200px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title">{order?.name}</h2>
                    <p className="card-text">
                      Order from: <b>{order?.email}</b>
                    </p>
                    <h4>Status: '{order?.status}'</h4>
                    <h5>$ {order?.price}</h5>
                    <button
                      onClick={() => handleStatus(order._id)}
                      className="btn btn-outline-success"
                    >
                      Give Approval
                    </button>

                    <button
                      onClick={() => handleDelete(order._id)}
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
      </div>
    </div>
  );
};

export default ManageAllOrders;
