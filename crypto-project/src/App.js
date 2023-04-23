// App.js
import { Routes,Route} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage'
import WatchlistPage from './pages/WatchlistPage';

function App() {

  return (
   <div className='App'>

   <Routes>

<Route path='/' element={<HomePage/>} />
<Route path='/dashboard' element={<DashboardPage />} />
 {/*<Route path='/coin/:id' element={<CoinPage />} />*/}
<Route path='/compare' element={<ComparePage />} />
<Route path='/watchlist' element={<WatchlistPage />} />

   </Routes>
   </div>
   
   
  )

}

export default App;
