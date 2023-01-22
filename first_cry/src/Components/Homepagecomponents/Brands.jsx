import React from "react";
import bandbanner_data from "../../db.json";
import band_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Brands = () => {
  let bandbannerdata = bandbanner_data.brand_banner;
  let banddata = band_data.brands;
  return (
    <Box w={"90%"} m={"auto"}>
      <Box>
        {bandbannerdata.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
      <Grid templateColumns="repeat(8, 1fr)">
        {banddata.map((elem) => {
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

export default Brands;
