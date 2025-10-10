import {
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export function Landing() {

    const navigate = useNavigate();

    return (
        <Flex
            alignItems="center"
            width="100%"
            height="100%"
            pt="30vh"
            justifyContent="center"
        >
            <Flex
                direction="column"
                maxW="2xl"
                textAlign="center"
                align="center"
            >
                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="extrabold"
                    mb={4}
                    lineHeight="short"
                    color={useColorModeValue("blue.600", "blue.300")}
                >
                    DeptCollector — Keep Track, Pay Up 💰
                </Heading>

                <Text
                    fontSize="lg"
                    mb={8}
                    color={useColorModeValue("gray.700", "gray.300")}
                >
                    For every skipped lecture somebody pays the price.
                    Tally up fines, for some fun events 🎓💸
                </Text>

                <Stack
                    direction={{ base: "column", sm: "row" }}
                    spacing={4}
                    w="full"
                    justify="center"
                >
                    <Button
                        as="a"
                        onClick={() => {
                            navigate('/login');
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="blue"
                        size="lg"
                        variant={"outline"}
                    >
                        Login
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    );
}
