import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DescriptionIcon from "@mui/icons-material/Description";
import EventIcon from "@mui/icons-material/Event";
import Typography from "@mui/material/Typography";

function Footer() {
  const [value] = React.useState("home");

  const handleChange = () => {};

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "5px",
        backgroundColor: "white",
        boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <Container>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            value="home"
            label={
              <Typography variant="caption" align="center">
                Home
              </Typography>
            }
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            value="shortlist"
            label={
              <Typography variant="caption" align="center">
                Shortlist
              </Typography>
            }
            icon={<FavoriteIcon />}
          />

          <BottomNavigationAction
            value="documents"
            label={
              <Typography variant="caption" align="center">
                Documents
              </Typography>
            }
            icon={<DescriptionIcon />}
          />

          <BottomNavigationAction
            value="calendar"
            label={
              <Typography variant="caption" align="center">
                Calendar
              </Typography>
            }
            icon={<EventIcon />}
          />
        </BottomNavigation>
      </Container>
    </Box>
  );
}

export default Footer;
