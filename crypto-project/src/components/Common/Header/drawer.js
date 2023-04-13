import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Button from '@mui/material/Button';
import './styles.css'

export default function TemporaryDrawer() {
  const[open,setOpen]= useState(false)

  return (
    <div>
          <Button onClick={()=>setOpen(true)}><MenuOpenRoundedIcon className='Links'/></Button>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=> setOpen(false)}
          >
 <div className='drawerlinks'>
<a href='/'>
  <p className='Link'>Home</p>
</a>
<a href='/'>
  <p className='Link'>Compare</p>
</a>
<a href='/'>
  <p className='Link'>Watchlist</p>
</a>
<a href='/'>
  <p className='Link'>Dashboard</p>
</a>
    </div>
          </Drawer>

    </div>
  );
}






   