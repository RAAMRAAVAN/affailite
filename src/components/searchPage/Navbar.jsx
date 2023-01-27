import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css"
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  Box,
  Link,
  TextField,
  InputAdornment
} from "@mui/material";
import { ArrowBack, CurrencyRupee, KeyboardArrowDown, Sort } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { setSectionStatus } from "../../redux/sections/sectionAction";
export const Navbar = () => {
  const [anchorE1, setEnchorE1] = useState(null);
  const dispatch = useDispatch();
  const sectionStatus = useSelector(
    (state: any) => state.section.sectionStatus
  );
  const open = Boolean(anchorE1);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setEnchorE1(null);
  };
  console.log("reducer working:", sectionStatus);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link
              color="inherit"
              style= { {textDecoration: 'none'}}
              href="/"
            >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => dispatch(setSectionStatus(true))}
            >
              <ArrowBack />
            </IconButton>
          </Link>
          {/* <TextField  variant='filled' fullWidth="true" placeholder="What do you want to buy today?" /> */}
          <input className="whatToBuyInput" style={{width:"100%", backgroundColor:"transparent", border:"none"}}  placeholder="What do you want to buy today?" />
        </Toolbar>
      </AppBar>
    </>
  );
};
