import React from "react";
import babyaccess_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Babyaccess = () => {
  let babyaccessdata = babyaccess_data.baby_access;
  return (
    <Box w={"90%"} m={"auto"}>
      <Grid templateColumns="repeat(6, 1fr)">
        {babyaccessdata.map((el) => {
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

export default Babyaccess;
