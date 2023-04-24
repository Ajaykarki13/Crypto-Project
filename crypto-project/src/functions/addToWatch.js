
import {toast } from 'react-toastify' ;
let addcoin = [];
export const addWatch = (ids) =>{
    if(window.confirm("Are you sure you want to add this coin")) {
     
        let items = JSON.parse(localStorage.getItem('watchlist'));
        if(items)
        {
            addcoin = JSON.parse(localStorage.getItem('watchlist'));

            let checkcoin = addcoin.filter(x=> x ===ids)
            if(checkcoin.length===0)
            {
                 addcoin.push(ids)
            }
        }
        else
        {
   if(!addcoin.includes(ids))
        {
            addcoin.push(ids)
        }
    }
            localStorage.setItem('watchlist',JSON.stringify(addcoin))
    
     //   localStorage.setItem('watchlist', JSON.stringify(items.filter((t) => t === id)));
        toast.success(
            `${
                ids.slice(0,1).toUpperCase() + ids.slice(1)
            } added to  watchlist!`
        );
        
    } 
    else{
        toast.error("Could'nt remove the coin from watchlist!") ;
    
    }
};