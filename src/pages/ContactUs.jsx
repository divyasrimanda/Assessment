
import ContactUsBanner from "../assets/contact-ifza.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "../index.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


function ContactUs() {
    const navigate = useNavigate();
  
  return (
    <main>
      <Header />
      <div className="contactus-container">
        
        <div className="contactus-left">
          <img
            src={ContactUsBanner}
            alt="Contact Us Left Img"
            className="contactus-img"
          />
        </div>
        <div className="contactus-middle">
        
          <div>
            <h1 className="contact-header">CONTACT US </h1>
            <h1 className="contact-header2">TODAY</h1>
            <p className="call-title">CALL LANDLINE:</p>
            <button className="tel-btn">+971 4 228 5285</button>
          </div>
          <div>
            <p className="call-title">LOCAL TOLL FREE:</p>
            <button className="tel-btn2">800-4392</button>

            <h4 className="call-title">RECEPTION HOURS</h4>
            <p className="timings">Monday - Friday: 8.30AM to 8.00PM</p>
            <p className="timings2">Sunday: 10.00AM to 4.00PM</p>

            <h4 className="call-title">CALL CENTRE HOURS</h4>
            <p className="timings">Monday - Friday: 8.30AM to 8.00PM</p>
            <p className="timings2">Sunday: 10.00AM to 4.00PM</p>

            <div className="social-media-links">
                <div className="links">
                <Link to='https://www.facebook.com/ifzauae' target="_blank"><TiSocialFacebook className="icons"/> </Link>
                <Link to='https://www.instagram.com/ifzauae/' target="_blank"><FaInstagram className="icons" /> </Link>
                <Link to='https://www.linkedin.com/company/ifzauae/' target="_blank"><FaLinkedinIn className="icons" /> </Link>
                <Link to='https://x.com/ifzauae' target="_blank"><FaTwitter className="icons" /> </Link>
                <Link to='https://www.youtube.com/channel/UCWlcrQFK9vAYZ89ueMW8qbg' target="_blank"><FaYoutube className="icons" /> </Link>
                  

                </div>
            </div>

          </div>
        </div>
        <div className="contactus-right">
          <h3 className="contact-details-header">
            Let us know how we can help! Fill out your contact form to hear back from us. 
          </h3>
          <div className="form-container">
            <form>
              <div className="row">
                <div className="col-75">
                  <select id="subject" name="subject">
                    <option value="select">Select a Subject</option>
                    <option value="option1">
                      Become a Professional Partner
                    </option>
                    <option value="option2">Business Setup Enquiries</option>
                    <option value="option3">Office Setup enquiries</option>
                    <option value="option4">General Enquiries</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-75">
                  <input
                    type="text"
                    id="lname"
                    name="firstname"
                    placeholder="First name*"
                    required
                  />
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email address*"
                    required
                  />
                </div>
                <div className="col-75">
                  <input
                    type="date"
                    value="2024-06-18"
                    required
                  />
                </div>
                <div className="col-75">
                
                 <input type="time" id="booking-time" name="booking-time" required />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <select id="country" name="country">
                    <option value="option1">UAE+971</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="text"
                    name="text"
                    placeholder="Phone number*"
                    style={{ width:"64%",marginLeft:'-11em'}}
                   
                    required
                  />
                </div>
                <div className="col-75"></div>
              </div>
              <div className="row">
                <div className="col-75">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Message*"
                    style={{height:"200px"}}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <input type="submit" value="Submit" />
                
              </div>
              <p className="backScreen-text" onClick={()=> navigate('/')}><IoIosArrowRoundBack />Back to HomePage</p>
              <hr className="hr-tag"  />
            </form>
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default ContactUs;
