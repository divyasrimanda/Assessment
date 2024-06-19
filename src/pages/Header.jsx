
import Logo from '../assets/logo-clr.png';
import '../index.css';
import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "2px";
    }
  }


  return (
    <header id="navbar">
          <img src={Logo} alt="Logo" onClick={()=> navigate('/')} className='Logo' />
        <a href="tel:009718004392" className='contact-no'>
        <BsTelephoneFill />  +9718004392
        </a>
  </header>
  );
}

export default Header;
