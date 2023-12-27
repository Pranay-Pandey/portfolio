import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Hello, my name is Pranay Pandey</h1>
          <h1>I'm a web developer</h1>

          <p>
            I'm a web developer based in India. I have a passion for web
            development and love to create for web and mobile devices. I have a
            strong interest in web development and have been working with web
            technologies for over 2 years. I have worked with many clients and
            companies to create websites and web applications that are both
            beautiful and functional. I am currently working as a freelancer and
            looking for new opportunities.
          </p>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
}
