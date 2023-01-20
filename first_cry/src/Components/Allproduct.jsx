import React from "react";
import allproducts_data from "../productpage.json";
import { Box, Grid, GridItem, Image, Flex, Text } from "@chakra-ui/react";

const Allproduct = () => {
  let allproductsdata = allproducts_data.kids;
  return (
    <Flex>
      <Box w={"20%"} border="1px solid red"></Box>
      <Box w={"80%"} border="1px solid red">
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {allproductsdata.map((el) => {
            return (
              <GridItem border="1px solid red" p={"20px"}>
                <Box w={"100%"} h={"80%"} m={"auto"}>
                  <Image src={el.image} w={"100%"} h={"100%"} />
                </Box>
                <Text w={"100%"} p={"2% 0"}>
                  {el.description}
                </Text>
                <Flex>
                  <p>₹{el.price}</p>
                  <s>₹{el.strike_price}</s>
                </Flex>
                <Flex>
                  <Image src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png" />
                  <p>Club Price:{+el.price - 20}</p>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Allproduct;
