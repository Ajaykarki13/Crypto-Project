
import {toast } from 'react-toastify' ;

export const addWatch = (id) =>{
    if(window.confirm("Are you sure you want to add this coin")) {
        let items = JSON.parse(localStorage.getItem('watchlist'));
        localStorage.setItem('watchlist', JSON.stringify(items.filter((t) => t === id)));
        toast.success(
            `${
                id.slice(0,1).toUpperCase() + id.slice(1)
            } added to  watchlist!`
        );
        
    } 
    else{
        toast.error("Could'nt remove the coin from watchlist!") ;
    }
};