'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'


import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import SvgIcon from '@mui/material/SvgIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


export default function SideBar() {

  const router = useRouter()

  return (
      
      <Box sx={{height:'100%'}}>
        
        <Box  sx={{height:'6%', width:'100%'}}>
          <Toolbar variant='dense' disableGutters sx={{width:'100%',borderBottom: '1px solid #333',background:'#191919',}}>
            <Button variant='text' sx={{paddingLeft:'20px', width:'100%',  justifyContent:'left'}}> 
              <TrendingUpIcon  sx={{color:'#ba68c8', marginRight:'20px'}}/>
              Performance
            </Button>
          </Toolbar>
        </Box>

        <Box sx={{height:'94%'}}>
          <List>
            {[
              {label:'Overview', icon:<DashboardIcon />}, 
              {label:'Positions', icon:<DonutSmallIcon />}, 
              {label:'History', icon:<HistoryIcon/>}, 
              {label:'Journal', icon:<AutoStoriesIcon/>}
            ].map((obj, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => router.push(`/${obj.label}`)}>
                  <ListItemIcon>
                    <SvgIcon component={() => obj.icon} />
                  </ListItemIcon>
                  <ListItemText primary={obj.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

      </Box>
      
  );
}