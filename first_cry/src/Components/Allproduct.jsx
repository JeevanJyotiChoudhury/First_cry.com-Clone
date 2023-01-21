import React from "react";
import allproducts_data from "../productpage.json";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Text,
  Button,
  Stack,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";

const Allproduct = () => {
  let allproductsdata = allproducts_data.kids;
  return (
    <>
      <Flex justify={"space-between"} w={"90%"} m={"auto"} p={"15px 0"}>
        <Box>TBF</Box>
        <Box w={"200px"}>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Flex>
        <Box w={"20%"} border="1px solid red">
          <Box style={{ margin: "20px" }}>
            <Box className="brandfilter">
              <h1
                style={{
                  textAlign: "left",
                  padding: "10px 0px 10px 20px",
                  backgroundColor: "#eeeeee",
                  marginBottom: "10px",
                }}
              >
                Brand
              </h1>
              <Stack spacing={[3]} direction={["column"]}>
                <Checkbox size="md" colorScheme="red" value="Pine Kids">
                  Pine Kids
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Anthrilo">
                  Anthrilo
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Honeyhap">
                  Honeyhap
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Kookie Kids">
                  Kookie Kids
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Angel & Rocket">
                  Angel & Rocket
                </Checkbox>
              </Stack>
            </Box>
            <Box className="brandfilter">
              <h1
                style={{
                  textAlign: "left",
                  padding: "10px 0px 10px 20px",
                  backgroundColor: "#eeeeee",
                  marginBottom: "10px",
                }}
              >
                Color
              </h1>
              <Stack spacing={[1]} direction={["column"]}>
                <Checkbox size="md" colorScheme="red" value="Boy">
                  Boy
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Girl">
                  Girl
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Unisex">
                  Unisex
                </Checkbox>
              </Stack>
            </Box>
            <Box className="brandfilter">
              <h1
                style={{
                  textAlign: "left",
                  padding: "10px 0px 10px 20px",
                  backgroundColor: "#eeeeee",
                  marginBottom: "10px",
                }}
              >
                Sleeve
              </h1>
              <Stack spacing={[1]} direction={["column"]}>
                <Checkbox size="md" colorScheme="red" value="0-10">
                  Upto 10%
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="10-20">
                  10% - 20%
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="20-30">
                  20% - 30%
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="30-40">
                  30% - 40%
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="40+">
                  More than 40%
                </Checkbox>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box w={"80%"} border="1px solid red">
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {allproductsdata.map((el) => {
              return (
                <GridItem
                  p={"20px"}
                  h={"auto"}
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  <Box>
                    <Box w={"100%"} h={"80%"} m={"auto"}>
                      <Image src={el.image} w={"100%"} h={"100%"} />
                    </Box>
                    <Text w={"100%"} p={"2% 0"}>
                      {el.description}
                    </Text>
                    <Flex w={"28%"} justify={"space-between"} pb={"2%"}>
                      <Text>₹{el.price}</Text>
                      <Text as="s" color="gray">
                        ₹{el.strike_price}
                      </Text>
                    </Flex>
                    <Flex w={"50%"} justify={"space-between"}>
                      <Image
                        src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png"
                        w={"30px"}
                      />
                      <Text>Club Price:{+el.price - 20}</Text>
                    </Flex>
                    <Button
                      leftIcon={<CgShoppingCart />}
                      colorScheme="teal"
                      variant="solid"
                      mt={"15px"}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default Allproduct;
