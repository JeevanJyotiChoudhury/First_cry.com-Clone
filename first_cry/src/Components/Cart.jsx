import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Cart = () => {

  let cartProduct=JSON.parse(localStorage.getItem("cartItem"))
  console.log(cartProduct)

  const[cartProd,setCartProd] = useState(cartProduct)
  let sum=0;
  for(let i=0;i<cartProd.length;i++){
    let amount=+(cartProd[i].price)
    console.log(amount)
    sum=sum+amount
  }

  return (
    <>
    <Box bg='tomato' height={"50px"} color="white"> <center>
      <Text>Total:₹ {sum}</Text>
      </center></Box>
    <Box>
      {
        cartProd.map((el)=>{
          return (
            <Flex h={"200px"} w={"80%"} m={"auto"} p={8}  justify="space-between">
              <Box w="15%"><Image src={el.image} h="100%" w="100%"/></Box>
              <Box w="50%">
                <Text>{el.description}</Text>
                <Text>{el.brand}</Text>
                <Text>{el.category}</Text>
              </Box>
              <Box w="25%">
                <Text color="red">₹{el.price}</Text>
              <Text as='s' color="gray.500">MRP: {el.strike_price}</Text>
              <Text>Club Price: ₹{el.price -20}</Text>
              </Box>
            </Flex>
          )
        })
      }
    </Box>
    </>
  )
}

export default Cart