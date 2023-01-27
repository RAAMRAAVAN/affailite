import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
} from "@mui/material";
import {  Sort } from "@mui/icons-material";
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => dispatch(setSectionStatus(true))}
          >
            <Sort />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CASHKARO
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              color="inherit"
              style= { {textDecoration: 'none'}}
              href="/myearnings"
            >
              <Button
                id="Total-Earnings"
                color="inherit"
                aria-controls={open ? "login-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <div>Total Earnings</div>
                <div>&#x20b9;0.00</div>
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
