import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaCar, FaTools, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading mb={4}>Welcome to AutoHub</Heading>
        <Text fontSize="xl" mb={6}>
          Your one-stop solution for all automotive needs!
        </Text>
        <Image src="https://images.unsplash.com/photo-1602267774924-38124c047174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc2hvcHxlbnwwfHx8fDE3MTQzNjMwNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="lg" mb={4} />
        <Flex wrap="wrap" justify="center" gap={6}>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid">
            New Arrivals
          </Button>
          <Button leftIcon={<FaTools />} colorScheme="orange" variant="solid">
            Services
          </Button>
          <Button leftIcon={<FaUserFriends />} colorScheme="blue" variant="solid">
            Meet Our Team
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
