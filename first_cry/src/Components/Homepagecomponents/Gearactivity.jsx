import React from "react";
import gear_activity_data from "../../db.json";
import { Box, Image } from "@chakra-ui/react";

const Gearactivity = () => {
  let gearactivitydata = gear_activity_data.gear_activity;
  return (
    <Box w={"90%"} m={"auto"} _hover={{cursor:"pointer"}}>
      {gearactivitydata.map((el) => {
        return <Image src={el.image} alt="" />;
      })}
    </Box>
  );
};

export default Gearactivity;
