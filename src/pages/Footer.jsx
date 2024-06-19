
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
     <div className="footer-left-text">
      <h1 className='footer-title'>NEED MORE INFORMATION?</h1>
      <p className='footer-subtitle-desc'>Contact us for all your Company Formation queries</p>
      <button className="contact-now">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text" onClick={()=> navigate('/contactUs')}>CONTACT US NOW</span>
        </button>
     </div>
    
    </footer>
  );
}

export default Footer;
