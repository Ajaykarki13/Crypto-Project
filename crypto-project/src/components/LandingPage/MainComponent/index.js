import React from 'react';
import './styles.css';
import Button from '../../Common/Button';
import iphone from '../../../assets/iphone 1.png';
import gradient from '../../../assets/gradient 1.png';
import {motion} from 'framer-motion';
function MainComponent()
{
    return <div className='flex-info'>
        <div className='left'>
            <motion.h1 className='track-crypto-heading'
            
            initial={{opacity:0, x:-40}}
            animate={{opacity:1,x:1}}
            transition={{duration:1}}
            >Track Crypto</motion.h1>
            <motion.h1 className='real-time-heading'
              initial={{opacity:0, x:-40}}
              animate={{opacity:1,x:1}}
              transition={{duration:1.5}}>Real Time.</motion.h1>
<motion.p className='info-text'
  initial={{opacity:0, x:-40}}
  animate={{opacity:1,x:1}}
  transition={{duration:2}}>Track crypto in real time. Visit the dashboard now!</motion.p>
<motion.div className='btn-flex'
  initial={{opacity:0, x:-40}}
  animate={{opacity:1,x:1}}
  transition={{duration:2.5}}>
    <Button text='Dashboard' /> 
    <Button text='Share' outlined={true}/> 
    </motion.div>
    
        </div>

        <div className='right-phone'
          
        
        >
            <motion.img src={iphone} className='iphone' alt='img'
            initial={{y:-10}}
          animate={{y:10}}
          transition={{type:'smooth',
        repeatType:'mirror',
    duration:2,
repeat:Infinity}} />
            <img src={gradient} className='gradient' alt='grd'/>

        </div>

    </div>
}
export default MainComponent;