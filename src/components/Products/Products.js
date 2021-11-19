import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Products = () => {
  const [products, setProducts] = useState(null);

  // Getting all products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container my-3">
        {products && (
          <h1 className="text-center mb-3">
            Products Available: {products.length}
          </h1>
        )}
        {/* spinner */}
        {!products && (
          <div class="d-flex justify-content-center my-5 pb-5">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        
        <div className="services">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {products?.map((pd) => (
              <div key={pd._id} className="col">
                <div className="card h-100">
                  <img
                    src={pd?.img}
                    style={{ height: "250px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h2 className="card-title">{pd?.name}</h2>
                    <p className="card-text">{pd?.description.slice(0, 150)}</p>
                    <h4>$ {pd?.price}</h4>
                    <Link to={`/booking/${pd._id}`}>
                      <button className="btn btn-dark float-end">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
