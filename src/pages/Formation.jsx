
import FormationImg1 from '../assets/formation-img1.webp';
import FormationImg2 from '../assets/formation-img2.webp';
import FormationImg3 from '../assets/formation-img3.webp';
import FormationImg4 from '../assets/formation-img4.webp';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function Formation() {
  return (
    <div className='formation-container-section2'>
    <h2 className='formation-title'>DUBAI COMPANY FORMATION OFFERS</h2>
    <p className='formation-desc'>Take advantage of the incredible opportunities that come with locating your business in the UAE. Set up your company in Dubai and enjoy exceptional benefits with IFZA</p>
    <div className="wrap">
  <div className="box">
    <div className="box-top" id="demo1">
      <figure>
      <img className="box-image" src={FormationImg1} alt="Formation Img1" />
      </figure>
      <div className="title-flex">
        <h3 className="box-title">EVERY NEW LICENSE ADDS NEW TREES TO THE IFZA FOREST</h3>
      </div>
      <p className="description">For each new IFZA Business License issued, we will plant mangrove saplings in your name at the IFZA Mangrove Forest.</p>
    </div>
  </div>
  <div className="box">
    <div className="box-top">
    <figure>
      <img className="box-image" src={FormationImg2} alt="Fomation Img2" />
      </figure>
      <div className="title-flex">
        <h3 className="box-title">SPECIAL 100% FEE WAIVERS</h3>
       
      </div>
      <p className="waivers-description"><MdKeyboardDoubleArrowLeft style={{color:'#fcb900'}} />100% waiver on Dubai General Trading Fee</p>
      <p className="waivers-description"><MdKeyboardDoubleArrowLeft style={{color:'#fcb900'}}/>100% waiver on License Upgrade Fee</p>
      <p className="waivers-description"><MdKeyboardDoubleArrowLeft style={{color:'#fcb900'}}/>100% waiver on Cross Business Activity Fee</p>
      </div>

  </div>
  <div className="box">
    <div className="box-top">
    <figure>
      <img className="box-image" src={FormationImg3} alt="Formation Img3" />
      </figure>
      <div className="title-flex">
        <h3 className="box-title">ACCESS TO PREMIUM HEALTH INSURANCE THROUGH IFZA LIFE</h3>
      </div>
      <p className="description">IFZA Life provides uniquely tailored health insurance packages exclusively for IFZA Free Zone companies.</p>
    </div>
   
  </div>
  <div className="box">
    <div className="box-top">
    <figure><img className="box-image" src={FormationImg4} alt="Formation Img4" />
    </figure>
      <div className="title-flex">
        <h3 className="box-title">REMOTE COMPANY FORMATION PROCESS</h3>
      </div>
      <p className="description">All processes can be executed remotely (except Medical test and Emirates ID biometrics).</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Formation