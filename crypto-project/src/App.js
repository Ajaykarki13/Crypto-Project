// App.js
import { Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';



function App() {

  return (
   <div className='App'>

   <Routes>

<Route path='/' element={<HomePage/>} />
<Route path='/dashboard' element={<DashboardPage />} />
{/*<Route path='' element={</>} />
<Route path='' element={</>} />
<Route path='' element={</>} /> */}

   </Routes>
   </div>
   
   
  )

}

export default App;
