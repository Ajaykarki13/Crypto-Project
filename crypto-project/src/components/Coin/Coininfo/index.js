
import React, { useState } from 'react'
import './styles.css' ;
function CoinInfo({heading,desc}) {
const shortdesc = desc.slice(0,200) + "<span style='color:var(--grey)'>Read more...</span>";
const longdesc = desc;

const[flag,setFlag] = useState(false)
  return (
    <div className='grey-wrapper'>
        <h2 className='coin-info-heading'>{heading}</h2>
        {desc.length>200}
        <p onClick={()=>setFlag(!flag)}
        className='coin-info-desc'  dangerouslySetInnerHTML={{__html:!flag ? shortdesc: longdesc}}/>
        </div>
  )
}

export default CoinInfo