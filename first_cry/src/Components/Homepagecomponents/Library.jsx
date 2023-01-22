import React from "react";
import library_data from "../../db.json";
import { Box, Image } from "@chakra-ui/react";

const Library = () => {
  let librarydata = library_data.library;
  return (
    <Box w={"90%"} m={"auto"} _hover={{cursor:"pointer"}}>
      {librarydata.map((el) => {
        return <Image src={el.image} alt="" />;
      })}
    </Box>
  );
};

export default Library;
