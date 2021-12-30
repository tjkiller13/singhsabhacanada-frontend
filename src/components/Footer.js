import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    let location = useLocation()
  return (
    <div className={`${location.pathname==="/login"||location.pathname==="/contact"?"fixed-bottom":""}`}>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center flex-row p-2 footer-section border-bottom">
          <div className="me-3 p-2 d-none d-lg-block">
            <span>SSI Canada is a tax exempt, Canadian registered charity</span>
          </div>

          <div>
            <button type="button" id="donate" className="btn btn-outline-light text-reset" onClick={()=>{window.open("https://www.paypal.com/donate/?token=yrj4RmlVk0_DPzUrNdcfCNFok3AmNFsBoiqOae0M4EO1qoalVt9gmgSyr9V4Va0mb_NTcW9VKQIjVsRl&locale.x=CA", "_blank")}}>Donate Now!</button>
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-2 footer-section">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link to="" className="text-reset">
              <i className="fab fa-facebook-f footer-icon" onClick={()=>{window.open("https://www.facebook.com/singhsabhacanada/", "_blank")}}></i>
            </Link>
            <Link to="/contact" className="text-reset mx-2">
              <i className="fab fa-google footer-icon" onClick={()=>{window.open("https://www.singhsabhacanada.com/", "_blank")}}></i>
            </Link>
            <Link to="/contact" className="text-reset mx-2">
              <i className="fab fa-twitter footer-icon"></i>
            </Link>
            <Link to="/contact" className="text-reset">
              <i className="fab fa-instagram footer-icon"></i>
            </Link>
          </div>
        </section>

        <div className="text-center p-1" id="footer-item">© 2021 Copyright : <Link className="text-reset fw-bold" target="_blank" to="//singhsabhacanada.com/">singhsabhacanada.com</Link>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
