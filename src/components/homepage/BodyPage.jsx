import { PlayArrow } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
export const BodyPage = () => {
  return (
    <Grid
      container
      m={0}
      my={4}
      rowSpacing={0}
      columnSpacing={0}
      justifyContent="center"
    //   m={0}
    >
      <Grid item xs={10} sm={4} m={0}>
        <Card>
          <Link href="https://www.amazon.in?&linkCode=ll2&tag=nill02d-21&linkId=00e69272ebd8e45720f2678743b45042&language=en_IN&ref_=as_li_ss_tl">
            <CardMedia
              component="img"
              //   height="14"
              image="./amazonLogo.jpeg"
              alt="unsplashed image"
            />
          </Link>
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" variant="contained" color="error" href="https://www.amazon.in?&linkCode=ll2&tag=nill02d-21&linkId=00e69272ebd8e45720f2678743b45042&language=en_IN&ref_=as_li_ss_tl">
              EARN UPTO 8% REWARDS
              <PlayArrow />
            </Button>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" sx={{ textTransform: "none" }}>
              Reward Rates & Terms
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
