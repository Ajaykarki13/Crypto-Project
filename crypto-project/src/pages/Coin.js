import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import { coinObject } from '../functions/convertObject';
import CoinInfo from '../components/Coin/Coininfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import SelectDays from '../components/Coin/SelectDays';
import LineChart from '../components/Coin/LineChart/lineChart';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/Coin/PriceType';
import Footer from '../components/Common/Footer';
import BackToTop from '../components/Common/BackToTop';

function CoinPage() {

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({})
  const [priceType, setPriceType] = useState("prices")

  useEffect(() => {
    if (id) {
      async function getData() {
        const data = await getCoinData(id);
        if (data) {
          coinObject(setCoinData, data)
          const prices = await getCoinPrices(id, days, priceType);
          if (prices.length) {
            settingChartData(setChartData, prices);
            setIsLoading(false);
          }
        }
      } getData();
    }
  }, [days, id, priceType]);
//<<<<<<<<<<<<>>>>>>>>>...
  const handleDays = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices.length) {

      settingChartData(setChartData, prices)
      setIsLoading(false)
    }
  };
//<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>
  const handleTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices.length) {
      settingChartData(setChartData, prices)
      setIsLoading(false)
    }
  };

  return (
    <>
      <Header />
      <BackToTop />
      {
        isLoading ? (<Loader />) : (
          <>
            <div className='grey-wrapper'>
              <List coin={coinData} />
            </div>

            <div className='grey-wrapper'>
              <SelectDays days={days} handleDays={handleDays} />
              <PriceType priceType={priceType} handleTypeChange={handleTypeChange} />
              <LineChart chartData={chartData} />
            </div>

            <CoinInfo heading={coinData.name} desc={coinData.desc} />
            <div><Footer /></div>

          </>
        )
      }
    </>
  )
}

export default CoinPage;