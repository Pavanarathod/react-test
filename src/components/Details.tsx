import PercentIcon from "@mui/icons-material/Percent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import citiesWithDescriptions from "./data";

function Details() {
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const generateRandomColors = (count: number) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  };

  const colors = generateRandomColors(citiesWithDescriptions.length);

  const descriptionStyle = {
    minHeight: "150px",
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        padding: "15px",
        marginTop: "10px",
      }}
    >
      {citiesWithDescriptions.map((city, index) => (
        <Grid item xs={6} sm={2} key={index}>
          <Paper
            style={{
              padding: "16px",
              color: colors[index],
              minHeight: "100px",
              backgroundColor: "skyblue",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <Typography variant="h6" color="indigo">
              {city.cityName}
            </Typography>

            <Typography style={descriptionStyle} color="indigo">
              {city.description}
            </Typography>
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 10,
              }}
            >
              <PercentIcon style={{ fontSize: "50px", color: "gray" }} />
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Details;
