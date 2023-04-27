
import './styles.css';  
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const styles = {
  "& .Mui-selected":{
      color:"var(--blue) !important",
  },
  borderColor:"var(--blue)",
  border:"unset !important",
  "& .MuiToggleButtonGroup-grouped": {
      border:"1px solid !important",
      borderColor:"unset",
      color:"var(--blue)"
  },
 "& .MuiToggleButtonGroup-standard": {
          color:"var(--blue)",
      },
  }

export default function PriceType({priceType,handleTypeChange}) {
  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
     color="secondary"
      value={priceType}
      exclusive
      onChange={handleTypeChange}
      sx={styles}
      >

      <ToggleButton value="prices" aria-label="right aligned ">
        Prices
      </ToggleButton>

      <ToggleButton value="market_caps" aria-label="centered">
        Market Cap
      </ToggleButton>
      
      <ToggleButton value="total_volumes" aria-label="left aligned">
        Total volume
      </ToggleButton>
      
    </ToggleButtonGroup>
    </div>
  );
}