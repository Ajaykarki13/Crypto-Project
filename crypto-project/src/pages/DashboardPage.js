import Header from '../components/Common/Header';
import React, { useState, useEffect } from 'react';
import LabTabs from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import Paginationx from '../components/Dashboard/Pagination';

function DashboardPage() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [paginatedcoins, setPaginatedCoins] = useState([])
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

  //fetching data
  function fetchData() {
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    ).then((response) => {
      setCoins(response.data);
      setPaginatedCoins(response.data.slice(0, 10))
    }).catch(error => console.log('Error', error))

  }
  useEffect(() => { fetchData() }, [])
  return (
    ////
    //Pagination

    <div>
      <Header />
      <Search search={search} handleChange={handleChange} />
      <LabTabs coins={search ? filteredCoins : paginatedcoins} />
      {!search && (<Paginationx page={page} handlePageChange={handlePageChange} />)}
    </div>

  )
}

export default DashboardPage;