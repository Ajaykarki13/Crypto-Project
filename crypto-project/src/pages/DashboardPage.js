import Header from '../components/Common/Header';
import React, { useState, useEffect } from 'react';
import LabTabs from '../components/Dashboard/Tabs';
import Search from '../components/Dashboard/Search';
import Paginationx from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../components/Common/Footer';

function DashboardPage() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [paginatedcoins, setPaginatedCoins] = useState([])
  const[isLoading,setIsLoading]= useState(true);

  useEffect(() => { getData() }, [])
  
  const getData = async () => {
    const myCoins =  await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0,10));
      setIsLoading(false)
    }
  };

  //pagination function
  const handlePageChange = (e, value) => {
    setPage(value);
    var previousindex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousindex, previousindex + 10))
  };




  //search
  function handleChange(e) {
    setSearch(e.target.value)
  }
  //search function
  var filteredCoins = coins.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.symbol.toLowerCase().includes(search.toLowerCase()));



  return (
    
    //Pagination
    <>
        <Header />

        <BackToTop/>
        
{ isLoading ? (<Loader/>) :
   ( <><div>
      <Search search={search} handleChange={handleChange} />
      <LabTabs coins={search ? filteredCoins : paginatedcoins} />
      {!search && (<Paginationx page={page} handlePageChange={handlePageChange} />)}
      
    </div>
    <div><Footer /></div>

    </>
   )
}

</>
  )
}

export default DashboardPage;