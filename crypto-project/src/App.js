// App.js
import { Routes,Route} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage'
import WatchlistPage from './pages/WatchlistPage';
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';


function App() {

  return (
   <div className='App'>

   <Routes>

<Route path='/' element={<HomePage/>} />
<Route path='/dashboard' element={<DashboardPage />} />
 <Route path='/coin/:id' element={<CoinPage />} />
<Route path='/compare' element={<ComparePage />} />
<Route path='/watchlist' element={<WatchlistPage />} />

   </Routes>
   <ToastContainer/>
   </div>
   
   
  )

}

export default App;
