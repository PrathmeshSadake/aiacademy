import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className='notification-background'>
        <div className='container'>
          <p>
            Enroll now to avail the Early Bird offer.{" "}
            <span className='time'>Limited Seats only</span>
          </p>
        </div>
      </header>
      <header>
        <div className='header'>
          <div className='containers'>
            <Link to='/'>
              <img className='logo' src='./images/logo.png' alt='logo' />
            </Link>
            <div className='contacts'>
              <a href='tel:+919035175757'>
                <img src='./images/call.png' alt='call' />{" "}
                <span> +91 90351 75757</span>
              </a>
              <a href='https://wa.me/+919035175757'>
                <img src='./images/whatsapp.png' alt='whatsapp' />{" "}
                <span> +91 90351 75757</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
