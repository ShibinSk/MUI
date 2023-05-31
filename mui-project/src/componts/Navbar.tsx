import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import EmailIcon from "@mui/icons-material/Email";
import { Notifications } from "@mui/icons-material";

const Navbar = () => {

  const [open,setOpent]=useState(false)
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          TEST
        </Typography>
        <DevicesIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="seach.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            onClick={()=>setOpent(true)}
          />
        </Icons>
        <UserBox  onClick={()=>setOpent(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="body1">Shibin</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={()=>setOpent(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
