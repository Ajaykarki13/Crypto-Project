
import React, { useState } from 'react';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import TrendingDownSharpIcon from '@mui/icons-material/TrendingDownSharp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { addWatch } from '../../../functions/addToWatch';
import { removeWatch } from '../../../functions/removeWatch';
import { Tooltip } from '@mui/material';
import './styles.css';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';

function List({ coin }) {


    const [iswatched, setIsWatched] = useState(false);
    const watchList = JSON.parse(localStorage.getItem('watchlist')) || [];

    const handleWatchList = (e) => {
        e.preventDefault();
        if (watchList.includes(coin.id)) {
            removeWatch(coin.id);
            setIsWatched(false);
        } else {
            addWatch(coin.id);
            setIsWatched(true);
        }
    }

    return (
        <Link to={`/coin/${coin.id}`}>
            <>
                <tr className='List-row'>

                    <td className='info-flex'>
                        <img src={coin.image} alt='' className='coin-logo' />
                    </td>
                    <td>
                        <div className='name-col'>
                            <p className='coin-symbol'>{coin.symbol}</p>
                            <p className='coin-name'>{coin.name}</p>
                        </div>
                    </td>

                    {coin.price_change_percentage_24h > 0 ?
                        (<td className='chip-flex'>
                            <div className='price-chip'>
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className='icon-chip td-icon'>
                                <TrendingUpSharpIcon />
                            </div>
                            <div className='icon-chip' onClick={handleWatchList}>
                                {iswatched || watchList.includes(coin.id) ? (<StarOutlinedIcon />) : (<StarBorderIcon />)}
                            </div>


                        </td>) :
                        (<td className='chip-flex'>
                            <div className='price-chip chip-red '>
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className='icon-chip chip-red td-icon'>
                                <TrendingDownSharpIcon />
                            </div>
                            <div className='icon-chip chip-red' onClick={handleWatchList}>
                                {iswatched || watchList.includes(coin.id) ? (<StarOutlinedIcon />) : (<StarBorderIcon />)}
                            </div>

                        </td>)
                    }
                    <Tooltip title="Current Price">
                        <td>
                            <h3 className='coin-price td-center-align' style={{
                                color:
                                    coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green)',
                            }}>${coin.current_price.toLocaleString()}</h3>
                        </td>
                    </Tooltip>
                    <Tooltip title="Total Volume">
                        <td className='td-volume'>
                            <p className='total-volume td-right-align'>{coin.total_volume.toLocaleString()}</p>
                        </td>
                    </Tooltip>
                    <Tooltip title="Market Cap">
                        <td className='desktop-td-mkt'>
                            <p className='total-volume td-right-align'>{coin.total_volume.toLocaleString()}</p>
                        </td>
                    </Tooltip>
                    <Tooltip title="Market Cap">
                        <td className='mobile-td-mkt'>
                            <p className='total-volume td-right-align'>${convertNumber(coin.market_cap)}</p>
                        </td>
                    </Tooltip>
                </tr>
            </>
        </Link>
    )
}

export default List