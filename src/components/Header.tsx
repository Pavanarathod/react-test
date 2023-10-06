import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MobileHeader = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "blue",
        color: "white",
        minHeight: "20rem",

        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
    >
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <PersonAddIcon />
            </IconButton>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
          </Box>
        </Box>
      </Toolbar>

      <Box p={2} display="flex" alignItems="center">
        <div>
          <Typography fontSize="40px" variant="h2">
            Find your
          </Typography>
          <Typography fontSize="50px" variant="h1">
            Dream University
          </Typography>
          <Box
            sx={{
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              borderRadius: "25px",
              border: "1px solid #ccc",
              padding: "5px 10px",
              marginTop: "10px",
            }}
          >
            <TextField
              fullWidth
              sx={{
                border: "none",
                outline: "none",
              }}
              placeholder="Search university"
              InputProps={{
                endAdornment: (
                  <IconButton color="primary">
                    <SearchIcon fontSize="large" />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </div>
      </Box>
    </AppBar>
  );
};

export default MobileHeader;
