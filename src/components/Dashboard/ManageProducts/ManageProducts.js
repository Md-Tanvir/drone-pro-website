import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState(null);

  // Getting all products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Deleting product with id
  const handleDelete = (id) => {
    const action = window.confirm("Do you want to delete the product?");
    if (action) {
      fetch(`http://localhost:5000/delteProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center">All The Products</h2>
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

                <button
                  onClick={() => handleDelete(pd?._id)}
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

export default ManageProducts;
