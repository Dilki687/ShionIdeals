import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css"; // Include the updated CSS file
import bannerBg from "../images/banner-bg.jpg";
import teamwork from "../images/teamwork.jpg";
import sustainability from "../images/sustainability.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header
        className="header-section text-center d-flex align-items-center"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          height: "70vh",
        }}
      >
        <div className="container text-white">
          <h1 className="display-4 fw-bold">Shion Ideals</h1>
          <p className="lead">
            Your One-Stop Solution for Quality Spare Parts
          </p>
          <button className="btn custom-btn btn-lg">Explore Now</button>
        </div>
      </header>

      {/* Vision Section */}
      <section className="vision-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">Our Vision</h2>
          <p className="text-center mb-5">
            At Shion Ideals, we envision a future where innovation meets
            sustainability, creating a harmonious balance between technology
            and nature.
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
      <section className="services-section py-5">
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
    </div>
  );
};

export default HomePage;
