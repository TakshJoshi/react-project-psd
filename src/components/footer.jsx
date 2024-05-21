import phone from '../assets/phone.png';
import map from '../assets/map.png';
import link1 from '../assets/google+.png';
import link2 from '../assets/twitter.png';
import link3 from '../assets/instagram.png';
import link4 from '../assets/facebook.png';

const Footer = () => {
  return (
    <>
      <div className="topfooter">
        <div className='topa'>
          <div>
            <h3>CONTENT</h3>
            <p>lorem epsum<br/>Dolor sit</p>
          </div>
          <div>
            <h3>INFORMATION</h3>
            <p>lorem epsum<br/>Lorem, ipsum.</p>
          </div>
        </div>
        <div className='space'></div>
        <div className='topa'>
          <div>
            <h3>LEGAL</h3>
            <p>Lorem ipsum dolor sit amet consectetur. sit</p>
          </div>
          <div>
            <h3>HELP</h3>
            <p>Lorem ipsum dolor <br/>sit amet.</p>
          </div>
        </div>
        
        <div className='cont'>
          <div className='phone'>
            <img src={phone} alt="" />
            <p>3-6000-0000 <br/>-6000-0000</p><br />
          </div>
          <div className='map'>
            <img src={map} alt="" />
            <p>67000 , England, UK</p>
          </div>          
        </div>
      </div>
      <div className='bottomfooter'>
        <div><p>Copyright © 2019 . Your companyname  All rights reserved</p>
      </div>
        <div className='links'>
          <a href="https://www.google.com/"><img src={link1} alt="" /></a>
          <a href="https://x.com/"><img src={link2} alt="" /></a>
          <a href="https://www.instagram.com/"><img src={link3} alt="" /></a>
          <a href="https://www.facebook.com/"><img src={link4} alt="" /></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
