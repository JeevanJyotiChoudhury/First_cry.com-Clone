import React from "react";
import shadebanner_data from "../../db.json";
import shade_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Colorshade = () => {
  let shadebannerdata = shadebanner_data.shades_of_color_banner;
  let shadedata = shade_data.shades_of_color;
  return (
    <Box w={"90%"} m={"auto"}>
      <Box>
        {shadebannerdata.map((el) => {
          return <Image src={el.image} alt="" />;
        })}
      </Box>
      <Grid templateColumns="repeat(4, 1fr)">
        {shadedata.map((elem) => {
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

export default Colorshade;
