import Header from '../components/Common/Header';
import React, {useState,useEffect} from 'react';
import LabTabs from '../components/Dashboard/Tabs';
import axios from 'axios';

function DashboardPage() {

  const[coins,setCoins] = useState([])

  function fetchData(){
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    ).then((response)=>setCoins(response.data)).catch(error=>console.log('Error',error))
  }

  useEffect(()=>{fetchData()},[])
  return (

    <div>
<Header />
<LabTabs coins={coins}/>
    </div>

  )
}

export default DashboardPage;