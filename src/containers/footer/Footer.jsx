import './footer.css'
import gpt3Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='content__footer section__padding'>
      <div className='content__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
      </div>
      <div className='content__footer-btn'>
        <p>Request Early Access</p>
      </div>
      
      <div className='content__footer-links'>
        <div className='content__footer-links_logo'>
          <img src={gpt3Logo} alt="logo"/>
          <p>Crechterwoord K12 182 DK Alknjkcv, All Rights Reserved </p>
        </div>
        <div className='content__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='content__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='content__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcv, All Rights Reserved</p>
          <p>085-132-567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
