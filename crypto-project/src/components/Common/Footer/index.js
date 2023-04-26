
import Share from '../../Share';
import React from 'react'
import './styles.css'
function Footer() {
  return (
  <div className='footer'>
  <h2 style={{color:"var(--white)"}}>CryptoCurrency Tracker.</h2>
    <div className='footer-icon'>
        <Share />
        </div>

        </div>
  )
}

export default Footer;