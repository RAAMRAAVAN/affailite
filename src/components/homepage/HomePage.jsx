import { Sections } from "./Sections";
import { Navbar } from "./Navbar";
import { BodyPage } from "./BodyPage";
import { Stack } from "@mui/material";
export const HomePage = () => {
  return (
    <Stack display="flex" justifyContent="center">
      <Navbar />
      <BodyPage />
      <Sections />
    </Stack>
  );
};
