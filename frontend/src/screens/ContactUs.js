import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// import contactimg from "../images/contactimg.jpg";

const ContactUs = () => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className="contact-us">
      {/* Banner Section */}
      <div className="responsive-banner">
        <div className="banner-overlay">
          <motion.h1
            className="banner-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t("StayConnected")}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <motion.h2
          className="text-center mb-4 section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("Havesomeissues")}
        </motion.h2>
        <motion.p
          className="text-center mb-5 section-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {t("welcomecontact")}
        </motion.p>

        {/* Contact Details Section */}
        <div className="row justify-content-center">
          {/* General Enquiries */}
          <motion.div
            className="col-sm-6 col-md-4 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <div className="card contact-card">
              <div className="card-body text-center">
                <h5 className="card-title">{t("generalEnquiries")}</h5>
                <p className="card-text">📞 +8180-4781-7117</p>
                <p className="card-text">📞 +8170-1052-6962</p>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="col-sm-6 col-md-4 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.9 }}
          >
            <div className="card contact-card">
              <div className="card-body text-center">
                <h5 className="card-title">{t("generalEnquiries")}</h5>
                <p className="card-text">📧 shionideals@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Consumer Enquiries */}
          <motion.div
            className="col-sm-6 col-md-4 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <div className="card contact-card">
              <div className="card-body text-center">
                <h5 className="card-title">{t("generalEnquiries")}</h5>
                <p className="card-text">{t("postalAddress")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
