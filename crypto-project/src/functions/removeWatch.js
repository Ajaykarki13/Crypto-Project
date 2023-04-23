import {toast } from 'react-toastify' ;

export const removeWatch = (id) =>{
    if(window.confirm("Are you sure you want to remove this coin")) {
        let items = JSON.parse(localStorage.getItem('watchlist'));
        localStorage.setItem('watchlist', JSON.stringify(items.filter((t)=> t !== id)));

        toast.success(
            `${
                id.slice(0,1).toUpperCase() + id.slice(1)
            } removed from watchlist!`
        );
        
    } 
    else{
        toast.error("Could'nt remove the coin from watchlist!") ;
    }
};