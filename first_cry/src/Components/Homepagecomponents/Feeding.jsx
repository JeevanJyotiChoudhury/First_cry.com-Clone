import React from "react";
import feeding_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Feeding = () => {
  let feedingdata = feeding_data.feeding;
  return (
    <Box w={"90%"} m={"auto"}>
      {feedingdata.map((el) => {
        return <Image src={el.image} alt="" />;
      })}
    </Box>
  );
};

export default Feeding;
