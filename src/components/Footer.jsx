import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className='sec13'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-cs-12'>
            <ContactForm />
          </div>
          <div className='col-md-6 col-cs-12'>
            <p className='getintouch'>
              <img src='./images/phone_icon.png' alt='phone_icon' />
              <span>Get in touch with us</span>
              <a
                href='tel:+919035175757'
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "22px",
                  textDecoration: "none",
                }}
              >
                <p className='pnumber'>+91 90351 75757</p>
              </a>
            </p>

            <h3>
              <img src='./images/map_orange.png' alt='phone_icon' /> Location
            </h3>
            <p className='address'>
              Indiranagar, bangalore <br /> (20 meters away from indiranagar
              metro station) <br />
              <div
                style={{
                  paddingTop: "25px",
                }}
              >
                <Link
                  to='/privacy-policy'
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
