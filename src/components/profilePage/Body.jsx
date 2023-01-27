import { Mail, Settings } from "@mui/icons-material";
import { Box, Divider, Stack, Typography,ListItemText, List, ListItem, ListItemButton, ListItemAvatar, ListItemIcon, Avatar,  } from "@mui/material";
export const Body = () => {
  return (
    <>
      <Stack
        width="100%"
        p={2}
        color="white"
        sx={{ backgroundColor: "#1976d2", boxSizing: "border-box" }}
      >
        <Typography sx={{fontWeight:"bold"}}>Hello, ram babu ray</Typography>
        <Divider color="#709ecc" sx={{ marginTop: "5px", marginBottom: "5px",  borderWidth:"2px" }} />
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography>Total Cashback:</Typography>
            <Typography variant="h5" sx={{fontWeight:"bold"}}>&#x20b9;0.00</Typography>
          </Box>
          <Box>
            <Typography>Total Rewards:</Typography>
            <Typography variant="h5" sx={{fontWeight:"bold"}}>&#x20b9;0.00</Typography>
          </Box>
        </Stack>
      </Stack>

      <Box sx={{ width: "100%", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding sx={{backgroundColor:"white"}}>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar sx={{backgroundColor:"white"}}>
                  <Settings sx={{color:"gray"}}/>
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="Account Settings"/>
          </ListItemButton>
        </ListItem>
        {/* <Divider/> */}
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="Secondary Text" />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 3" secondary="Secondary Text" />
        </ListItem>
      </List>
    </Box>

    </>
  );
};
