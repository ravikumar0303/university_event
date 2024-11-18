import { Box, Card, CardContent, Checkbox, FormControlLabel, Slider, Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";

function AdminDefaultScreen() {

  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  
  const mobileAndDesktopOS = [
    { id: 0, value: 40, label: "Academic" },
    { id: 1, value: 15, label: "Social" },
    { id: 2, value: 10, label: "Cultural" },
    { id: 3, value: 25, label: "Sports" },
    { id: 4, value: 10, label: "Technical Fest" },
  ];

  const valueFormatter = (value) => `${value}%`;
  
  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleRadius = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setRadius(newValue);
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Card
          variant="outlined"
          sx={{
            maxWidth: "23%",
            minWidth: "23%",
            height: 145,
            background: "linear-gradient(to right,#134B70,#201E43)",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white" }}
            >
              Total Events : 5
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            maxWidth: "23%",
            minWidth: "23%",
            height: 145,
            background: "linear-gradient(to right,#134B70,#201E43)",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white" }}
            >
              Participated in Events : 2
            </Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            maxWidth: "23%",
            minWidth: "23%",
            height: 145,
            background: "linear-gradient(to right,#134B70,#201E43)",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white" }}
            ></Typography>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            maxWidth: "23%",
            minWidth: "23%",
            height: 145,
            background: "linear-gradient(to right,#134B70,#201E43)",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white" }}
            ></Typography>
          </CardContent>
        </Card>
      </Stack>

      <div style={{ marginTop: "2rem" }}>
        <Box sx={{ width: "80%" }}>
          <PieChart
            height={300}
            series={[
              {
                data: mobileAndDesktopOS.slice(0, itemNb),
                innerRadius: radius,
                arcLabel: (params) => params.label ?? "",
                arcLabelMinAngle: 20,
                valueFormatter,
              },
            ]}
            skipAnimation={skipAnimation}
          />
          <FormControlLabel
            checked={skipAnimation}
            control={
              <Checkbox
                onChange={(event) => setSkipAnimation(event.target.checked)}
              />
            }
            label="skipAnimation"
            labelPlacement="end"
          />
          <Typography id="input-item-number" gutterBottom>
            Number of items
          </Typography>
          <Slider
            value={itemNb}
            onChange={handleItemNbChange}
            valueLabelDisplay="auto"
            min={1}
            max={8}
            aria-labelledby="input-item-number"
          />
          <Typography id="input-radius" gutterBottom>
            Radius
          </Typography>
          <Slider
            value={radius}
            onChange={handleRadius}
            valueLabelDisplay="auto"
            min={15}
            max={100}
            aria-labelledby="input-radius"
          />
        </Box>
      </div>
    </div>
  );
}

export default AdminDefaultScreen;

