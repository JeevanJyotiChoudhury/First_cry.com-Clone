import React from "react";
import dipersbanner_data from "../../db.json";
import dipers_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Dipers = () => {
  let dipersbannerdata = dipersbanner_data.dipers_banner;
  let dipersdata = dipers_data.dipers;
  return (
    <Box w={"90%"} m={"auto"}>
      <Box>
        {dipersbannerdata.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
      <Grid templateColumns="repeat(7, 1fr)">
        {dipersdata.map((elem) => {
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

export default Dipers;
