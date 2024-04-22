import React from "react";
import { FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footerContainer"> 
      <div className="footerSocialConnect">
        <div className="footerSection1">
          <p>Subscribe to our emails</p>
          <div className="ftr-inputWrapper">
            <input type="text" name="subemail" placeholder="Email" />
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="footerSection2">
          <button className="socialBtn">
            <FaInstagram />
          </button>
          <button className="socialBtn">
            <FaTwitter />
          </button>
        </div>
      </div>
      <hr />

      <div className="footerShoppingCategoryLinks">
        <div className="f-group">
          <h2> Shop here</h2>
          <div className="ftr-1">
            <p>ALL ITEMS</p>
            <p>MEN</p>
            <p>FEMALE</p>
            <p>ACCESSORIES</p>
            <p>COLLECTION</p>
          </div>
        </div>
        <div className="f-group  ">
          <h2> Quick Links</h2>
          <div className="ftr-2">
            <p>ABOUT US</p>
            <p>OUR WALK-IN-STORE</p>
            <p>FAQS</p>
            <p>POLICIES</p>
            <p>YOUR ACCOUNT</p>
          </div>
        </div>
        <div className="f-group">
          <h2> CONTACT</h2>
          <div className="ftr-3">
            <p>West Virginia 007 St, Gustavo Rd</p>
            <p>
              Operating Hrs: <br /> MONDAY - SUNDAY <br />
              (10AM -10PM)
            </p>
            <p>+234 902 4958 212</p>
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
