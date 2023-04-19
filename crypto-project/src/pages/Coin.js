import {useParams} from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import { coinObject } from '../functions/convertObject';

function CoinPage() {
    const {id} = useParams();
    const[isLoading,setIsLoading]= useState(true);
    const[coinData,setCoinData]= useState()
    function fetchData() {
        if(id){
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) => {
            coinObject(setCoinData,response.data)
          setIsLoading(false)
        }).catch(error => console.log('Error', error))
    
      }}
    useEffect(()=>{fetchData()},[id]);

  return (
    <div>
        <Header/>
        {isLoading ?(<Loader/> ):(<><div className='grey-wrapper'>
            <List coin={coinData}/>
            </div></>) }
        </div>
  )
}

export default CoinPage;