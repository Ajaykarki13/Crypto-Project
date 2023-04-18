import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './styles.css' ;
function Search({search,handleChange}) {

  return (
    <div className='search-flex'>
         <SearchIcon/>
         <input placeholder='Search' type='text' value={search} 
         onChange={(e)=>handleChange(e)} />
         </div>
  )
}

export default Search ;