import Header from "./Header";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import Formation from "./Formation";
import Benefits from "./Benefits";
import CompanyFormationProcess from "./CompanyFormationProcess";
import BgVideo from '../assets/IFZA.mp4'

import GotoTop from "./GoToTop";

export default function LandingPage() {
  return (
    <div>
      <main>
        <div className="landing-page-outer-style" id="#backToTop">
        <Header />
         <video width="100%"  autoPlay muted controls="false" loop  controlsList="nofullscreen">
          <source src={BgVideo} type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
        </video>
          <div className="offers-container">

            <div className="offer-section-left">
              <div>
                <h1 className="offers-title">THE FREE ZONE ECOSYSTEM <br/>DESIGNED FOR GROWTH</h1>
                <p className="offer-desc">IFZA is a leading Free Zone Community in Dubai with world-class infrastructure, state-of-the-art facilities, and business friendly regulations, making it an ideal destination for foreign investors looking to set up and grow their business.</p>
                <p className="offer-subtitle">EASY BUSINESS SETUP WITH EXCLUSIVE OFFERS</p>
                <div className="offer-list">
                  <IoIosArrowForward className="arrow-icon"/>
                  <p className="list-item">100% Waiver on Cross Business Activity Fee</p>
                </div>

                <div className="offer-list">
                  <IoIosArrowForward className="arrow-icon"/>
                  <p className="list-item">Discounts on Multi-Year Packages</p>
                </div>
                <div className="offer-list">
                  <IoIosArrowForward className="arrow-icon"/>
                  <p className="list-item">100% Waiver on General Trading Activity Fee</p>
                </div>
              </div>
            </div>


           
          </div>
        </div>
       <Formation />
       <Benefits />
       <CompanyFormationProcess />
      </main>
      <Footer />
     <GotoTop />
    </div>
  );
}
