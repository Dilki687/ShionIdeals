import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
// import bannerBg from "../images/banner-bg.jpg";
import teamwork from "../images/teamwork.jpg";
import sustainability from "../images/sustainability.jpg";
import logo from "../images/logo2.jpg";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header id="home" className="header-section text-center">
        <div
          id="headerCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Image 1 */}
            <div className="carousel-item active">
              <div
                className="header-slide"
                style={{
                  backgroundImage: `url(${banner1})`,
                  backgroundSize: "cover",
                  height: "70vh",
                }}
              >
                <div className="container text-white d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="display-4 fw-bold">Shion Ideals</h1>
                  <p className="lead">
                    Your One-Stop Solution for Quality Spare Parts
                  </p>
                  <button className="btn custom-btn btn-lg">Explore Now</button>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="carousel-item">
              <div
                className="header-slide"
                style={{
                  backgroundImage: `url(${banner2})`,
                  backgroundSize: "cover",
                  height: "70vh",
                }}
              >
                <div className="container text-white d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="display-4 fw-bold">Innovative Solutions</h1>
                  <p className="lead">
                    Delivering the Best Spare Parts Worldwide
                  </p>
                  <button className="btn custom-btn btn-lg">Learn More</button>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="carousel-item">
              <div
                className="header-slide"
                style={{
                  backgroundImage: `url(${banner3})`,
                  backgroundSize: "cover",
                  height: "70vh",
                }}
              >
                <div className="container text-white d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="display-4 fw-bold">Trusted by Thousands</h1>
                  <p className="lead">Sustainable and Reliable Products</p>
                  <button className="btn custom-btn btn-lg">Contact Us</button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-us-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">About Us</h2>
          <p className="text-center">
            Shion Ideals is a trusted provider of high-quality spare parts,
            dedicated to serving a diverse range of industries. With a focus on
            innovation, reliability, and exceptional customer service, we aim to
            be your go-to solution for all your spare parts needs. Our
            commitment to excellence drives us to source and deliver products
            that meet the highest standards of quality and durability.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Our Vision</h2>
          <p className="text-center mb-5">
            At Shion Ideals, we envision a future where innovation meets
            sustainability, creating a harmonious balance between technology and
            nature.
          </p>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="vision-box p-4 mb-3 rounded">
                <h5>New Beginnings</h5>
                <p>Redefining innovation with optimism.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-box p-4 mb-3 rounded">
                <h5>Team Spirit</h5>
                <p>Fostering collaboration and inclusiveness.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-box p-4 mb-3 rounded">
                <h5>Calm Approach</h5>
                <p>Maintaining focus and tranquility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Our Mission</h2>
          <p className="text-center mb-5">
            At Shion Ideals, our mission is to innovate and inspire through
            sustainable practices, community engagement, and cutting-edge
            technology.
          </p>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={teamwork}
                alt="Teamwork"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Teamwork</h5>
              <p>Fostering inclusive teamwork.</p>
            </div>
            <div className="col-md-4">
              <img
                src={sustainability}
                alt="Sustainability"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Sustainability</h5>
              <p>Promoting eco-conscious practices.</p>
            </div>
            <div className="col-md-4">
              <img
                src={sustainability}
                alt="Education"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Education</h5>
              <p>Educating for a green future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Our Services</h2>
          <p className="text-center mb-5">
            Explore the diverse range of services we offer, tailored to meet
            your unique needs and goals.
          </p>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={sustainability}
                alt="Quality Assurance"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Quality Assurance</h5>
              <p>
                We ensure every product meets the highest quality standards.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={sustainability}
                alt="Wide Range of Products"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Wide Range of Products</h5>
              <p>Choose from a diverse selection of spare parts.</p>
            </div>
            <div className="col-md-4">
              <img
                src={sustainability}
                alt="Customer Support"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>24/7 Customer Support</h5>
              <p>Our team is always ready to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="our-brands-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Our Brands</h2>
          <div className="row justify-content-center text-center">
            <div className="col-md-3 col-sm-6">
              <a
                href="https://www.shiongreen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo} // Replace with your brand logo path
                  alt="Shion Green"
                  className="img-fluid mb-3 rounded-circle brand-logo"
                />
              </a>
              {/* <h5>Shion Green</h5> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
