
import React from 'react';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import TrendingDownSharpIcon from '@mui/icons-material/TrendingDownSharp';
import { Tooltip } from '@mui/material';
import './styles.css';

function List({coin}) {
  return (
    <tr className='List-row'>
     
        <td className='info=flex'>
            <img src={coin.image} alt='' className='coin-logo'/>
            </td>
            <td>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </td>
        {coin.price_change_percentage_24h>0 ?
         (   <td className='chip-flex'>
            <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='icon-chip'><TrendingUpSharpIcon /></div>


        </td>):
        (   <td className='chip-flex'>
        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
        <div className='icon-chip chip-red'><TrendingDownSharpIcon/></div>
    </td>)
        }
        <Tooltip title="Current Price">
        <td>
        <h3 className='coin-price td-center-align' style={{color:
        coin.price_change_percentage_24h<0 ? 'var(--red)': 'var(--green)',
        }}>${coin.current_price.toLocaleString()}</h3>
        </td>
        </Tooltip>
        <Tooltip title="Total Volume">
        <td>
        <p className='total-volume td-right-align'>{coin.total_volume.toLocaleString()}</p>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap">
        <td>
        <p className='total-volume td-right-align'>{coin.total_volume.toLocaleString()}</p>
        </td>
</Tooltip>
        </tr>

  )
}

export default List