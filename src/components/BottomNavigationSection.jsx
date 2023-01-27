import { BottomNavigation, BottomNavigationAction, Link } from "@mui/material";
import {
  CurrencyRupee,
  Favorite,
  Home,
  LocalAtm,
  Person,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSBottomNavigation } from "../redux/bottomnavigation/bottomNavigationAction";
import { HomePage } from "./homepage/HomePage";
import { SearchPage } from "./searchPage/SearchPage";
import { ProfilePage } from "./profilePage/ProfilePage";
export const BottomNavigationSection = () => {
  // const [value, setValue] = useState();
  const bottomNavigationValue = useSelector(
    (state) => state.bottomNavigationValue.bottomNavigationValue
  );
  const dispatch = useDispatch();
  const links = { 0: <HomePage />, 1: <SearchPage />, 3: <ProfilePage /> };
  console.log("value=", links[bottomNavigationValue]);
  return (
    <>
      {links[bottomNavigationValue]}
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: "0" }}
        value={bottomNavigationValue}
        onChange={(event, newValue) => {
          dispatch(setSBottomNavigation(newValue));
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home sx={{margin:"0", padding:"0"}}/>} sx={{margin:"0", padding:"0"}}/>
        <BottomNavigationAction label="Search" icon={<Search sx={{margin:"0", padding:"0"}}/>} sx={{margin:"0", padding:"0"}}/>
        <BottomNavigationAction label="Refer & Earn" icon={<CurrencyRupee sx={{margin:"0", padding:"0"}}/>} sx={{margin:"0", padding:"0"}}/>
        {/* <BottomNavigationAction label="Missing?" icon={<LocalAtm sx={{margin:"0", padding:"0"}}/>} sx={{margin:"0", padding:"0"}}/> */}
        <BottomNavigationAction label="Profile" icon={<Person sx={{margin:"0", padding:"0"}}/>} sx={{margin:"0", padding:"0"}}/>
      </BottomNavigation>
    </>
  );
};
