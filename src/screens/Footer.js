import React, { useEffect } from "react";
import { FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa";
import "../styles/Footer.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  });
  return (
    <div className="footerContainer">
      <div className="footerSocialConnect">
        <div className="footerSection1">
          <p data-aos="fade-right">Subscribe to our emails</p>
          <div className="ftr-inputWrapper">
            <input
              data-aos="fade-right"
              type="text"
              name="subemail"
              placeholder="Email"
            />
            <button data-aos="fade-right">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="footerSection2">
          <button className="socialBtn">
            <FaInstagram data-aos="fade-right" />
          </button>
          <button className="socialBtn">
            <FaTwitter data-aos="fade-right" />
          </button>
        </div>
      </div>
      <hr />

      <div className="footerShoppingCategoryLinks">
        <div className="f-group">
          <h2 data-aos="fade-right"> Shop here</h2>
          <div className="ftr-1">
            <p data-aos="fade-left">ALL ITEMS</p>
            <p data-aos="fade-right">MEN</p>
            <p data-aos="fade-left">FEMALE</p>
            <p data-aos="fade-right">ACCESSORIES</p>
            <p data-aos="fade-left">COLLECTION</p>
          </div>
        </div>
        <div className="f-group  ">
          <h2 data-aos="fade-right"> Quick Links</h2>
          <div className="ftr-2">
            <p data-aos="fade-left">ABOUT US</p>
            <p data-aos="fade-right">OUR WALK-IN-STORE</p>
            <p data-aos="fade-left">FAQS</p>
            <p data-aos="fade-right">POLICIES</p>
            <p data-aos="fade-left">YOUR ACCOUNT</p>
          </div>
        </div>
        <div className="f-group">
          <h2 data-aos="fade-right"> CONTACT</h2>
          <div className="ftr-3">
            <p data-aos="fade-right">West Virginia 007 St, Gustavo Rd</p>
            <p data-aos="fade-right">
              Operating Hrs: <br /> MONDAY - SUNDAY <br />
              (10AM -10PM)
            </p>
            <p data-aos="fade-left">+234 902 4958 212</p>
          </div>
        </div>
      </div>
      <hr />

      <div className="footerWriteUp">
        <p>
          &copy; Neluxe Powered by Shopify - refund policy - privacy policy -
          terms of service - shipping policy - contact - contact information -
          legal notice
        </p>
      </div>
    </div>
  );
}

export default Footer;
