// App.js
import { Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/Coin';


function App() {

  return (
   <div className='App'>

   <Routes>

<Route path='/' element={<HomePage/>} />
<Route path='/dashboard' element={<DashboardPage />} />
<Route path='/coin/:id' element={<CoinPage />} />
   </Routes>
   </div>
   
   
  )

}

export default App;
