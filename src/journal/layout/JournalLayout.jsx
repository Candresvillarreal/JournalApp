import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', paddingTop: 3}}>

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 8 }}
        >

            { children }
        </Box>
        
    </Box>
  )
}
