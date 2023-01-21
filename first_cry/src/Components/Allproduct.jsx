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
import { Link } from "react-router-dom";

const Allproduct = () => {
  let allproductsdata = allproducts_data.kids;
  return (
    <>
      <Flex justify={"space-between"} w={"90%"} m={"auto"} p={"15px 0"}>
        <Box>TBF</Box>
        <Box w={"200px"}>
          <Select placeholder="Select option">
            <option value="LTH">Price: Low to High</option>
            <option value="HTL">Price: High to Low</option>
            <option value="RLTH">Rating: Low to High</option>
            <option value="RHTL">Rating: High to Low</option>
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
                I Bears
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Anthrilo">
                Carter's
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Honeyhap">
                ToffyHouse
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Kookie Kids">
                Spunkies
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Angel & Rocket">
                Babyhug
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Angel & Rocket">
                Pine
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Angel & Rocket">
                Kookie
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Angel & Rocket">
                Babyoye
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
                Multicolor
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Girl">
                Sky
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Unisex">
                Blue
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Unisex">
                White
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Unisex">
                Yellow
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="Unisex">
                Orange
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
                Full sleeve
                </Checkbox>
                <Checkbox size="md" colorScheme="red" value="10-20">
                Half sleeve
                </Checkbox>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box w={"80%"} >
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
                    <Flex w={"70%"} justify={"space-between"} >
                      <Box h="100%" w="20%" >
                      <Image
                        src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png"
                        w={"100%"}
                      />
                      </Box>
                      <Text>Club Price:{+el.price - 20}</Text>
                    </Flex>
                    <Link to={`/products/${el.id}`}>
                    <Button
                      leftIcon={<CgShoppingCart />}
                      colorScheme="teal"
                      variant="solid"
                      mt={"15px"}
                    >
                      Add to Cart
                    </Button>
                    </Link>
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
