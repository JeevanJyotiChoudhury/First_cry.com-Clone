import React from "react";
import babycare_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Babycare = () => {
  let babycaredata = babycare_data.baby_care;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(5, 1fr)">
        {babycaredata.map((el) => {
          return (
            <GridItem>
              <Image src={el.image} alt="" />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Babycare;
