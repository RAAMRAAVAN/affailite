import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { setSectionStatus } from "../../redux/sections/sectionAction";
export const Navbar = () => {
  const dispatch = useDispatch();
  const sectionStatus = useSelector(
    (state) => state.section.sectionStatus
  );
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Earnings
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
