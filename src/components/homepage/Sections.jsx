import { Drawer, Box, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {setSectionStatus} from "../../redux/sections/sectionAction"

export const Sections = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const sectionStatus=useSelector((state: any)=>state.section.sectionStatus)
  const dispatch=useDispatch();
  return (
    <>
      <Drawer
        anchor="left"
        open={sectionStatus}
        onClose={() => {
          setIsDrawerOpen(false);
          dispatch(setSectionStatus(false))
        }}
      >
        <Box p={2} width="250px" role="presentation" textAlign="center">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
