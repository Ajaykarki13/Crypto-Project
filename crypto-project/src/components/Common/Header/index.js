

import React from 'react';
import './styles.css';
import Button from '../Button'
import TemporaryDrawer from './drawer';
function Header() {

  return (
    
   <div className='navbar'>
    <h1 className='logo'>CryptoTracker<span style={{color:'var(--blue)'}}>.</span></h1>
    <div className='Links'>
<a href='/'>
  <p className='Link'>Home</p>
</a>
<a href='/'>
  <p className='Link'>Compare</p>
</a>
<a href='/'>
  <p className='Link'>Watchlist</p>
</a>
<a href='#'>
  <Button text = 'Dashboard' handleClick = {()=>console.log('btn clickd')}/>
</a>

    </div>

    <div className='drawer'>
<TemporaryDrawer/>   
    </div>

    </div>
   
  )
  
}

export default Header;
