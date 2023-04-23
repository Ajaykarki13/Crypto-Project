
import React, {useState,useEffect} from 'react'
import Header from '../components/Common/Header';
import List from "../components/Dashboard/List";
import { get100Coins } from '../functions/get100Coins';

function WatchlistPage() {
  const [coins, setCoins] = useState([])

  useEffect(() => { getData() }, [])
  
  const getData = async () => {
    const myCoins =  await get100Coins();
    if(myCoins){
      setCoins(myCoins);
     
    }
  };

  return (
    <div>
<Header/>
<div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
                        <List />
                    </div>

    </div>
  )
}

export default WatchlistPage;