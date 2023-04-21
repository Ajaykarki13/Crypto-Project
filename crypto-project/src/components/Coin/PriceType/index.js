
import './styles.css';  

import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function PriceType({priceType,handleTypeChange}) {
  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handleTypeChange}
      sx={{
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
        }}
      
    >
      <ToggleButton value="prices" aria-label="left aligned">
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" aria-label="centered">
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" aria-label="right aligned">
        Total volume
      </ToggleButton>
      
    </ToggleButtonGroup>
    </div>
  );
}