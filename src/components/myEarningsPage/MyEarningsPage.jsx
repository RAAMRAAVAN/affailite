import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
  Avatar,
  CardHeader,
  Stack,
} from "@mui/material";
import {
  AccountBalanceWallet,
  Assignment,
  CurrencyRupee,
  ExpandCircleDown,
  HeadsetMicRounded,
  Help,
  Mail,
} from "@mui/icons-material";
import { Navbar } from "./Navbar";
export const MyEarningsPage = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Navbar />
      <Box width="100%" height="23vh" sx={{position:"absolute",zIndex:"-1",backgroundImage: "linear-gradient(to right, #d90ee0, #620dd5)"}}>

      </Box>
      <Stack width="90%" spacing={2}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "10px",
            marginTop: "20px"
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {/* <CardHeader title="My Order Details" sx={{color:"white", fontSize:"10px"}}/> */}
            {/* <Divider sx={{ marginLeft:"15px", borderColor:"white",borderWidth:"1px", borderStyle:"dashed"}}/> */}
            <CardContent>
              <Box
                sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"space-between" }}
              >
                <Box>
                  <Typography sx={{ fontWeight: "bold", display:"flex", alignItems:"center" }}>
                    Total Earnings<Help color="success" fontSize="inherit"/>
                  </Typography>
                  <Typography variant="h4">&#x20b9;0.00</Typography>
                </Box>
                <Avatar
                  sx={{
                    padding: "15px",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    backgroundColor: "white",
                    boxShadow: "0px 4px 4px #D3D3D3"
                  }}
                >
                  <AccountBalanceWallet
                    color="secondary"
                    sx={{ width: "25px", height: "25px" }}
                  />
                </Avatar>
              </Box>

              <Divider
                sx={{
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              <Typography
                variant="subtitle1"
                component="div"
                display="flex"
                sx={{
                  lignItems: "end",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Earnings will show here within 72 hours of your shopping via CashKaro.
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // backgroundColor: "#00BFFF",
            backgroundImage: "linear-gradient(to right, #00BFFF, #6ffaef)",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "55%" }}>
            {/* <CardHeader title="My Order Details" sx={{color:"white", fontSize:"10px"}}/> */}
            {/* <Divider sx={{ marginLeft:"15px", borderColor:"white",borderWidth:"1px", borderStyle:"dashed"}}/> */}
            <CardContent>
              <Typography color="white" sx={{ fontWeight: "bold" }}>
                My Order Details
              </Typography>
              <Divider
                sx={{
                  borderColor: "white",
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              <Typography
                variant="subtitle1"
                color="white"
                component="div"
                display="flex"
                sx={{
                  lignItems: "end",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                View More
                <ExpandCircleDown
                  sx={{
                    transform: "rotate(270deg)",
                    weight: "12px",
                    height: "12px",
                  }}
                />
              </Typography>
            </CardContent>
          </Box>
          <Avatar
            sx={{
              padding: "15px",
              width: "auto",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "25px",
              backgroundColor: "#a2faf3",
              boxShadow: "0px 4px 4px gray"
            }}
          >
            <Assignment
              color="secondary"
              sx={{ width: "25px", height: "25px" }}
            />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundImage: "linear-gradient(to right, #00BFFF, #6ffaef)",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "55%" }}>
            {/* <CardHeader title="My Order Details" sx={{color:"white", fontSize:"10px"}}/> */}
            {/* <Divider sx={{ marginLeft:"15px", borderColor:"white",borderWidth:"1px", borderStyle:"dashed"}}/> */}
            <CardContent>
              <Typography color="white" sx={{ fontWeight: "bold" }}>
                Request Payment
              </Typography>
              <Divider
                sx={{
                  borderColor: "white",
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              <Typography
                variant="subtitle1"
                color="white"
                component="div"
                display="flex"
                sx={{
                  lignItems: "end",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Get Paid
                <ExpandCircleDown
                  sx={{
                    transform: "rotate(270deg)",
                    weight: "12px",
                    height: "12px",
                  }}
                />
              </Typography>
            </CardContent>
          </Box>
          <Avatar
            sx={{
              padding: "15px",
              width: "auto",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "25px",
              backgroundColor: "#a2faf3",
              boxShadow: "0px 4px 4px gray"
            }}
          >
            <CurrencyRupee
              color="secondary"
              sx={{ width: "25px", height: "25px" }}
            />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundImage: "linear-gradient(to right, #00BFFF, #6ffaef)",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "55%" }}>
            {/* <CardHeader title="My Order Details" sx={{color:"white", fontSize:"10px"}}/> */}
            {/* <Divider sx={{ marginLeft:"15px", borderColor:"white",borderWidth:"1px", borderStyle:"dashed"}}/> */}
            <CardContent>
              <Typography color="white" sx={{ fontWeight: "bold" }}>
                Get Help
              </Typography>
              <Divider
                sx={{
                  borderColor: "white",
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              <Typography
                variant="subtitle1"
                color="white"
                component="div"
                display="flex"
                sx={{
                  lignItems: "end",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Learn More
                <ExpandCircleDown
                  sx={{
                    transform: "rotate(270deg)",
                    weight: "12px",
                    height: "12px",
                  }}
                />
              </Typography>
            </CardContent>
          </Box>
          <Avatar
            sx={{
              padding: "15px",
              width: "auto",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "25px",
              backgroundColor: "#a2faf3",
              boxShadow: "0px 4px 4px gray"
            }}
          >
            <HeadsetMicRounded
              color="secondary"
              sx={{ width: "25px", height: "25px" }}
            />
          </Avatar>
        </Card>
      </Stack>
    </Box>
  );
};
