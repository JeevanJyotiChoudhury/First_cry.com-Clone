import React from "react";
import moms_data from "../../db.json";
import { Box, Image } from "@chakra-ui/react";

const Moms = () => {
  let momsdata = moms_data.moms;
  return (
    <Box w={"90%"} m={"auto"}>
      {momsdata.map((el) => {
        return <Image src={el.image} alt="" />;
      })}
    </Box>
  );
};

export default Moms;
