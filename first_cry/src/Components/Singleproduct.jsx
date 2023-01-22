import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import allproducts_data from "../productpage.json";
import offer from "../Images/img.png";

const Singleproduct = () => {
  const prodid = useParams();
  console.log("id", prodid);
  const prodDetails = allproducts_data.kids.filter(
    (item) => item.id == prodid.id
  );
  const product = prodDetails[0];
  console.log(product);
  let discount = Math.round(
    ((product.strike_price - product.price) / product.strike_price) * 100
  );
  let cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  function handleAdd() {
    cartArray.push(product);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
  }
  return (
    <>
      <Flex w="85%" m="20px auto">
        <Box w="40%" h="550px">
          <Image src={product.image} h="100%" w="100%" />
        </Box>
        <Box w="60%" pl={6} pt={5}>
          <Text fontSize="xl" fontWeight={500}>
            {product.description}
          </Text>
          <Text fontSize="md" color="gray.500">
            New Born, Snug V neck tee with front buttons and elastic waist
            pajama for boys Product ID: 9109882 -{" "}
            <span color="blue">See Details</span>
          </Text>
          <br />
          <hr />
          <Flex w="52%" pt={4}>
            <Box>
              <Text fontSize="xl" as="b">
                ₹ {product.price}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="xl" as="s" color="gray">
                MRP: ₹{product.strike_price}.00
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="xl" color="tomato">
                ({discount}% OFF)
              </Text>
            </Box>
          </Flex>
          <Box w="50%" h="78px" border="1px solid gray" mt={6}>
            <Image src={offer} />
          </Box>
          <Flex mt={6} justify={"space-between"} w={"40%"}>
            <Box>
              <Button onClick={handleAdd} colorScheme="blue">
                Add to Cart
              </Button>
            </Box>
            <Box>
              <Link to="/cart">
                <Button colorScheme="blue">Go to Cart</Button>
              </Link>
            </Box>
          </Flex>
          <Box mt={6}>
            <Stack spacing={4} direction="row" align="center">
              <h1>SIZE</h1>
              <Button colorScheme="gray" variant="outline" size="md">
                3-6M
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                6-9M
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                9-12M
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                12-18M
              </Button>
              <Button colorScheme="gray" variant="outline" size="md">
                18-24M
              </Button>
            </Stack>
          </Box>

          <Flex className="offerscontainer" border="apx solid green" mt={5}>
            <Box w={"20%"} m={"auto"}>
              <Image src="https://cdn.fcglcdn.com/brainbees/images/club_member.webp" />
              <Text fontSize="sm" p="0 5px">
                Exclusive Offers & Discounts
              </Text>
            </Box>
            <Box w={"20%"} m={"auto"}>
              <Image src="https://cdn.fcglcdn.com/brainbees/images/price_benefit_member.webp" />
              <Text fontSize="sm" p="0 5px">
                Lower Prices on Products
              </Text>
            </Box>
            <Box w={"20%"} m={"auto"}>
              <Image src="https://cdn.fcglcdn.com/brainbees/images/earn_loyalty_cash.webp" />
              <Text fontSize="sm" p="0 5px">
                Loyalty Cash Points
              </Text>
            </Box>
            <Box w={"20%"} m={"auto"}>
              <Image src="https://cdn.fcglcdn.com/brainbees/images/baby_gear_assembly.webp" />
              <Text fontSize="sm" p="0 5px">
                Free baby gear assembly
              </Text>
            </Box>
            <Box w={"20%"} m={"auto"}>
              <Image src="https://cdn.fcglcdn.com/brainbees/images/lower_shipping_barrier.webp" />
              <Text fontSize="sm" p="0 5px">
                Lower Shipping barrier
              </Text>
            </Box>
          </Flex>
          <hr style={{ marginTop: "30px" }} />
          <Flex className="Extradetails" justify="space-between">
            <Box>
              <p>TENTATIVE DELIVERY</p>
            </Box>
            <Box>
              <p>Cash on Delivery Available </p>
            </Box>

            <Box>
              <p>30 days Return or Exchange</p>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box bg="tomato" h="30px">
        <Text textAlign="center" color="white">
          Big store for little ones
        </Text>
      </Box>
    </>
  );
};

export default Singleproduct;
