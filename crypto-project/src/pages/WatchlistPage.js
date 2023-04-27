
import React, {useState, useEffect} from 'react'
import Header from '../components/Common/Header';
import { get100Coins } from '../functions/get100Coins';
import LabTabs from '../components/Dashboard/Tabs';
import BackToTop from '../components/Common/BackToTop';

function WatchlistPage() {
  const [coins, setCoins] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => { 
    const getData = async () => {
      const myCoins =  await get100Coins();
      if (myCoins) {
        setCoins(myCoins.filter((coin) => list.includes(coin.id)));
      }
    };
    getData();
  }, [list]);

  useEffect(() => { 
    setList(JSON.parse(localStorage.getItem('watchlist')))
  }, []);

  return (
    <>
      <Header />
      { coins.length===0?(<h1 style={{textAlign:'center'}}>No currency added !</h1>):(<><BackToTop/>
      <LabTabs coins={coins} /></>)}
      
    </>
  )
}

export default WatchlistPage;
