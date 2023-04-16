
import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css';
import Button from '../Button'
import TemporaryDrawer from './drawer';

function Header() {

  return (
    
   <div className='navbar'>
    <h1 className='logo'>CryptoTracker<span style={{color:'var(--blue)'}}>.</span></h1>
    <div className='Links'>
<Link to='/'>
  <p className='Link'>Home</p>
</Link>
<Link to='/compare'>
  <p className='Link'>Compare</p>
</Link>
<Link to='/watchlist'>
  <p className='Link'>Watchlist</p>
</Link>
<Link to='/dashboard'>
  <Button text = 'Dashboard' handleClick = {()=>console.log('btn clickd')}/>
</Link>

    </div>

    <div className='drawer'>
<TemporaryDrawer/>   
    </div>

    </div>
   
  )
  
}

export default Header;
