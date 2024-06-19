
import { RxDoubleArrowRight } from "react-icons/rx";
import FreezoneImg from '../assets/landing-page.jpg';
import { useNavigate } from "react-router-dom";



function Benefits() {
  const navigate = useNavigate();
  return (
    <div className='benefits-container'>
    <div className="benefits-left">
       <img src={FreezoneImg} alt="" className='freezone-img'/>
    </div>
    <div className="benefits-right">
        <h2 className='benefits-right-title'>FREEZONE COMPANY FORMATION BENEFITS</h2>
        <ul>
        <li className='benefit-list'><RxDoubleArrowRight style={{color:'#fcb900'}} /> 100% ownership of commercial enterprises</li>
        <li className='benefit-list'><RxDoubleArrowRight style={{color:'#fcb900'}} />100% repatriation of capital and profit</li>
        <li className='benefit-list'><RxDoubleArrowRight style={{color:'#fcb900'}} />Tax-free import and export of goods in and out of the Free Zone</li>
        <li className='benefit-list'><RxDoubleArrowRight style={{color:'#fcb900'}} />No paid-up share capital requirement</li>
        <li className='benefit-list'><RxDoubleArrowRight style={{color:'#fcb900'}} />Incorporation of FZCOs or the registration of branch offices</li>
        <li className='benefit-list'><RxDoubleArrowRight style={{color:'#fcb900'}} />Low tax rates</li>
        </ul>
        <button className="contact-now">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text" onClick={()=> navigate('/contactUs')}>CONTACT US NOW</span>
        </button>
    </div>
    </div>
  )
}

export default Benefits