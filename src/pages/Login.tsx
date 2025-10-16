import {
    Button, Checkbox,
    Container,
    Flex,
    FormControl,
    FormLabel, Heading,
    Input, Text,
    useColorMode, useToast
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Loader} from "../components/ui/Loader.tsx";
import {PasswordInput} from "../components/ui/PasswordInput.tsx";

export function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [isTimeBased, setIsTimeBased] = useState<boolean>(true);
    const {colorMode} = useColorMode();
    const toast = useToast();
    const navigate = useNavigate();


    async function submitForm() {
        navigate("/p/dashboard");
        if (password === "" || username === "") {
            toast({
                status: 'warning',
                description: 'Username or password are wrong!',
                title: 'Issue',
            })
            return
        }
        const data: LoginRequest = {
            username: username,
            password: password,
            isTimeBased: isTimeBased,
        }
        try {
            return;
            // const response = await loginToAccount(data)

        } catch (e) {

            toast({
                status: 'error',
                description: e.message,
                title: 'Error',
            })
        }
    }

    useEffect(() => {

        async function wrapper() {

            try {
                // await checkAuthentication()
                // navigate("/dashboard")
            } catch (e) {
                //TODO: voidTokens()
            }
            setLoading(false);
        }

        wrapper();
    }, []);

    if (loading) {
        return  <Loader />
    }

    return (
        <Flex
            justifyContent="center"
            pt={'10vh'}
        >

            <Container
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                borderRadius="lg"
                padding="4"
                maxW="lg"

            >
                <Flex
                    flexDirection="column"
                    gap={'4'}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading>

                        <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            color={colorMode === "light" ? "blue.600" : "blue.300"}
                        >
                            Log into account
                        </Text>
                    </Heading>
                    <FormControl>
                        <FormLabel>
                            Username
                        </FormLabel>
                        <Input

                            placeholder={'Username'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <PasswordInput password={password} setPassword={setPassword} />
                    </FormControl>
                    <Flex gap={2}>
                        <Text>
                            Stay Logged In
                        </Text>
                        <Checkbox
                            colorScheme={'blue'}
                            value={isTimeBased ? 1 : 0}
                            onChange={() => {
                                setIsTimeBased(!isTimeBased)
                            }}
                        />

                    </Flex>
                    <Button
                        colorScheme={"blue"}
                        onClick={submitForm}
                    >
                        Login
                    </Button>
                </Flex>
            </Container>
        </Flex>
    );
}


export interface LoginRequest {
    username: string;
    password: string;
    isTimeBased: boolean;
}
