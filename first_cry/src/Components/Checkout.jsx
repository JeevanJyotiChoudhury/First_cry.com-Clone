import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate()
    function handleCheckout(){
        alert("Congratulations !! Your order placed sucessfully")
        navigate("/")
    }
  return (
    <Flex w={"80%"} m="auto" justify={"space-around"}>
        <Box w="50%">
        <Text p={6}  color="tomato" fontSize="2xl" textAlign={"center"}>ADDRESS DETAILS</Text>
        <hr />
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="Enter Your First name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Enter Your Last name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter Your Email" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>PhoneNumber</FormLabel>
        <Input placeholder="Enter Your PhoneNumber" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address-1</FormLabel>
        <Input placeholder="Enter Your Address-1" />
      </FormControl>
      <FormControl >
        <FormLabel>Address-2</FormLabel>
        <Input placeholder="Enter Your Address-2" />
      </FormControl>

      
    </Box>
    <Box w="30%">
        <Text p={6} color="tomato" fontSize="2xl" textAlign={"center"}>PAYMENT OPTIONS</Text>
        <hr />
    <Box m={4}><Button w="100%" colorScheme='blue'>Credit Card</Button></Box>
    <Box m={4}><Button w="100%" colorScheme='blue'>BHIM UPI</Button></Box>
    <Box m={4}><Button w="100%" colorScheme='blue'>DEBIT CARD</Button></Box>
    <Box m={4}><Button w="100%" colorScheme='blue' onClick={handleCheckout}>CASH ON DELIVERY</Button></Box>
    
    
    
    </Box>
    </Flex>
  );
};

export default Checkout;
