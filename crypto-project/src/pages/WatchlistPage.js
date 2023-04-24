
import React, {useState,useEffect} from 'react'
import Header from '../components/Common/Header';
import { get100Coins } from '../functions/get100Coins';
import LabTabs from '../components/Dashboard/Tabs';

function WatchlistPage() {

  const [coins, setCoins] = useState([])
const [list,setList]=useState([])
  useEffect(() => { getData() }, [])
  
  const getData = async () => {
    const myCoins =  await get100Coins();
    if(myCoins){
      setCoins(myCoins);
     setList(JSON.parse(localStorage.getItem('watchlist')))
    }
  };

  return (
    <>
    <div>

<Header/>
<LabTabs coins={coins.filter((t)=> list.includes(t.id))} />
    </div>
    </>
  )
}

export default WatchlistPage;