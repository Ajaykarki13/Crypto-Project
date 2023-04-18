import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Button from '@mui/material/Button';
import './styles.css'

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}><MenuOpenRoundedIcon className='Links' /></Button>
      <Drawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='drawerlinks'>
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
            <p className='Link' >Dashboard</p>
          </Link>
        </div>
      </Drawer>

    </div>
  );
}






