import "./Footer.css";
// import icon from "../../icons/footer-logo-icon-white.png";
const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="row">
          <div className="footer-links">
            <div className="social-Media footer-col">
              <div>
                <img
                  src={
                    "http://www.coupondel.com/imgs/footer-logo-icon-white.f4a976bc89294d2affe5402dadfd5734.png"
                  }
                  draggable="false"
                  alt="icon"
                />
                <ul className="social">
                  <li>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/company/coupondel/"
                    >
                      <i className="fi fi-brands-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      target="blank"
                      href="https://www.instagram.com/coupondel_official/"
                    >
                      <i className="fi fi-brands-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="blank"
                      href="https://www.facebook.com/Coupondelcom-109407805204561/"
                    >
                      <i className="fi fi-brands-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://twitter.com/coupondel_">
                      <i className="fi fi-brands-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="https://infinity-009.github.io/coupondel2/" target="blank">
                    about us
                  </a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">How to use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="back-top">
          <a href="#header">
            <span className="material-symbols-outlined">expand_less</span>
          </a>
        </div>
        <div className="row">
          <div className="footer-col">
            <div className="address">
              <h4>
                <span className="material-symbols-outlined">location_on</span>
                Find Us At
              </h4>
              <p>
                IoT Lab TIDES Business Incubator, Indian Institute of Technology
                Roorkee, Roorkee, Uttarakhand - 247667
              </p>
            </div>
          </div>
          <div className="footer-col">
            <div className="mailPhone">
              <span className="material-symbols-outlined">mail</span>{" "}
              <a href="mailto:admin@coupondel.com">admin@coupondel.com</a>
              <a href="tel:+91 8688198923">
                <span className="material-symbols-outlined">phone</span>
                8688198923
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy ">
        <p>&copy;Coupondel {year} All rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
