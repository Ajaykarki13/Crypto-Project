import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import TrendingDownSharpIcon from '@mui/icons-material/TrendingDownSharp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './styles.css'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { removeWatch } from '../../../functions/removeWatch';
import { addWatch } from '../../../functions/addToWatch';


  const Grid = ({ coin}) => {
const[clicked,setClicked] = useState(true);

function handleClick(id){

  if(clicked===true)
  {
addWatch(id)
 setClicked(false);
 }else if(clicked===false)
 
 {
removeWatch(id)
setClicked(true);
 }
}
  return (
//   <Link to = {`/coin/${coin.id}`}>
    <div
      className={`grid-container ${coin.price_change_percentage_24h < 0 && 'grid-container-red'}`}
    >
      <div className='info-flex'>
        <img src={coin.image} alt='' className='coin-logo' />
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ?
        (<div className='chip-flex'>
          <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip}}'><TrendingUpSharpIcon /></div>
          <div className='icon-chip'
           onClick = {() => handleClick(coin.id)} > <StarBorderIcon/>    </div>


        </div>) :
        (<div className='chip-flex'>
          <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip chip-red'><TrendingDownSharpIcon /></div>
          <div className='icon-chip chip-red' 
        onClick = {() => handleClick(coin.id)} > 
          <StarBorderIcon   />  
            </div>

        </div>)
      }
      <div className='info-container'>
        <h3 className='coin-price' style={{
          color:
            coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green)',
        }}>${coin.current_price.toLocaleString()}</h3>
        <p className='total-volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>
        <p className='total-volume'>Market Cap : ${coin.total_volume.toLocaleString()}</p>
      </div>

    </div>
// </Link>
  )
}

export default Grid