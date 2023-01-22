import React from "react";
import paradebanner_data from "../../db.json";
import parade_data from "../../db.json";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";

const Styleparade = () => {
  let paradebannerdata = paradebanner_data.style_parade_banner;
  let paradedata = parade_data.style_parade;
  return (
    <Box w={"90%"} m={"auto"}>
      <Box _hover={{cursor:"pointer"}}>
        {paradebannerdata.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
      <Grid templateColumns="repeat(6, 1fr)">
        {paradedata.map((elem) => {
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

export default Styleparade;
