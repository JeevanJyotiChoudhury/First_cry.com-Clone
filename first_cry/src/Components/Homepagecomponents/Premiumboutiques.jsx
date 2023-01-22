import React, { useState } from "react";
import boutique_data from "../../db.json";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";

const Premiumboutiques = () => {
  let boutiquedata = boutique_data.PREMIUM_BOUTIQUES;
  const [isVisible, setIsVisible] = useState("");

  function over(e) {
    setIsVisible("Shop Now");
  }

  return (
    <div>
      <Box bg="lightgray" mt={"30px"}>
        <Text
          fontSize="3xl"
          textAlign={"center"}
          p={"20px 0"}
          fontWeight={"bold"}
        >
          PREMIUM BOUTIQUES
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={5} w={"90%"} m={"auto"}>
          {boutiquedata.map((el) => {
            return (
              <GridItem _hover={{cursor:"pointer"}}>
                <Box>
                  <Image src={el.image} alt="" />
                </Box>
                <Box bg="rgb(231, 232, 167)" p={"20px"}>
                  <Text as="b">{el.category}</Text>
                  <Text onMouseOver={over}>{el.details}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Premiumboutiques;
