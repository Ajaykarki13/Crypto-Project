
import React from 'react' ;
import './styles.css';

function Button({text,handleClick,outlined})
{

return <div className= { outlined?'outlined_btn':'btn' }
 onClick={handleClick}>
    {text}
 </div>

}
export default Button;