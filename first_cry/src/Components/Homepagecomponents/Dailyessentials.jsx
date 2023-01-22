import React from "react";
import essentials_data from "../../db.json";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

const Dailyessentials = () => {
  let essentialsdata = essentials_data.daily_essentials;
  return (
    <Box w={"90%"} m={"auto"} _hover={{cursor:"pointer"}}>
      {essentialsdata.map((el) => {
        return <Image src={el.image} alt="" />;
      })}
    </Box>
  );
};

export default Dailyessentials;
