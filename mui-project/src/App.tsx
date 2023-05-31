import { Button, Typography, Box, Stack, ThemeProvider, } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Sidebar from "./componts/Sidebar";
import Feed from "./componts/Feed";
import Rightbar from "./componts/Rightbar"
import Navbar from "./componts/Navbar";
import { useState } from "react";
import { createTheme, PaletteMode } from '@mui/material';


function App() {

  const [mode,setMode]=useState('dark')
  const darkTheam =createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheam}>
      <Box bgcolor={"background.default"} color="white" >
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <Sidebar setMode={mode} />
          <Feed/>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
    );

}

export default App;
