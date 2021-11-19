import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../img/banner.jpg";
import img1 from "../../img/1.webp";
import img2 from "../../img/2.webp";
import img3 from "../../img/3.webp";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AllReviews from "../AllReviews/AllReviews";

const datas = [
  {
    id: 1,
    img: img1,
    name: "DJI Mavic 3 official, with dual camera, 4/3 CMOS sensor and epic 46 mins flight time",
    description:
      "Pocket-lint) - DJI has taken a giant leap into creating the perfect pro-level consumer drone, and has officially announced the all-new Mavic 3. And, as far as performance and specs go, this ones an absolute monster.It represents a huge upgrade over the Mavic 2 series, particularly when it comes to videography/photography and battery life. It starts with an all-new camera arrangement. ",
  },
  {
    id: 2,
    img: img2,
    name: "Best drone photos ever: Stunning images taken from the sky",
    description:
      "(Pocket-lint) - Drone photography has soared in recent years, with the number of and quality of drone photos increasing every year. There are so many photos in fact that drone photography even has its own official awards programmes.The best drones: Top rated quadcopters to buy, whatever your budget. Now that most new drones come equipped with high-quality cameras capable of capturing great shots and videos the images are only getting better and better. We say easier but thats not to say its a walk in the park. ",
  },
  {
    id: 3,
    img: img3,
    name: "DJI Mavic 3 leak reveals beefier design, dual cameras",
    description:
      "That dual camera system is expected to feature a telephoto zoom camera with a 12-megapixel sensor and a 20-megapixel primary/wide Micro Four-Thirds sensor. Other specifications are expected to include a mammoth 46 minutes flight time on a full battery, plus an advanced model that has an internal SSD and high speed cable for transferring high bitrate video files quickly. The original source of these leaked photos isnt clear, but they have been reported on by DroneDJ and GizmoChina, among others. So while they look legitimate, as always, take these with a pinch of salt. ",
  },
];

const Home = () => {
  const [products, setProducts] = useState(null);

  // Getting all products
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container">
        {/* hero area */}
        <div className="row my-3 align-items-center hero-area gy-5">
          <div className="col-12 col-md-6">
            <h1>
              LET'S FLY <br /> WITH US TO <br />
              THE <span>UNKNOWN</span>
            </h1>
   <Link to="/products">
            <button className="btn btn-dark hero-btn">EXPLORE NOW</button>
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <img src={banner} className="img-fluid" alt="" />
          </div>
        </div>

        {/* Products area */}
        <div className="my-5">
          {products && <h1 className="text-center mb-4">Our Products</h1>}
          {/* spinner */}
          {!products && (
            <div className="d-flex justify-content-center my-5 pb-5">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
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
                      <p className="card-text">
                        {pd?.description.slice(0, 150)}
                      </p>
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

        {/* Blog Section */}

        <div className="my-5">
          {datas && (
            <h1 className="text-center mb-4">Check Our Latest Blogs</h1>
          )}
          {/* spinner */}
          {!datas && (
            <div className="d-flex justify-content-center my-5 pb-5">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {datas.map((data) => (
              <div key={data.id} className="col">
                <div className="card h-100">
                  <img
                    src={data?.img}
                    style={{ height: "250px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{data?.name}</h4>
                    <p className="card-text">
                      {data?.description.slice(0, 150)}
                    </p>
                    <Link to="/home">
                      <button className="btn btn-dark float-end">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Review Section */}
      <AllReviews></AllReviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
