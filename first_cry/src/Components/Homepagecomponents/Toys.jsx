import React from "react";
import toy_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Toys = () => {
  let toydata = toy_data.toys;
  return (
    <Box w={"90%"} m={"auto"}>
      {toydata.map((el) => {
        return <Image src={el.image} alt="" />;
      })}
    </Box>
  );
};

export default Toys;
