import React from "react";
import occasionbanner_data from "../../db.json";
import occasion_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Occasion = () => {
  let occasionbannerdata = occasionbanner_data.occasion_banner;
  let occasiondata = occasion_data.occasion_edit;
  return (
    <Box w={"90%"} m={"auto"}>
      <Box>
        {occasionbannerdata.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {occasiondata.map((elem) => {
          return (
            <GridItem>
              <Image src={elem.image} alt="" />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Occasion;
