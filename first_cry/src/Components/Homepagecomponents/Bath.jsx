import React from "react";
import bathbanner_data from "../../db.json";
import bath_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Bath = () => {
  let bathbannerdata = bathbanner_data.bath_banner;
  let bathdata = bath_data.bath;
  return (
    <Box w={"90%"} m={"auto"}>
      <Box>
        {bathbannerdata.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
      <Grid templateColumns="repeat(7, 1fr)">
        {bathdata.map((elem) => {
          return (
            <GridItem _hover={{cursor:"pointer"}}>
              <Image src={elem.image} alt="" />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Bath;
