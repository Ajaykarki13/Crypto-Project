import  React,{useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color:'var(--white)', width:'50vw', fontSize:'1,2rem',
    fontWeight:'600',
     fontFamily:'Inter',textTransform:'capitalize',}
  
  return (
    <div>
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
            
          </TabList>
        </div>
        <TabPanel value="grid"><div>mapping for grid</div></TabPanel>
        <TabPanel value="list"><div>mapping for list</div></TabPanel>
       
      </TabContext>
    </div>
  );
}