import React, {useState} from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box, Button, CloseButton, Input, Stack, Text
  } from "@chakra-ui/react";
  import { useMoralis } from "react-moralis";

export const Auth = () =>{

    const {
        authenticate,
        isAuthenticating,
        authError,
      } = useMoralis();

    const SignUp = () => {
        // console.log(event);
        const { signup, user } = useMoralis();
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        let User = 'raina';
        return (
          <Stack spacing={6}>
            <Input
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Button onClick={() => signup(User, password, email)}>Sign up</Button>
          </Stack>
        );
      };
      
      const Login = () => {
        // console.log(event);
        const { login } = useMoralis();
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        let User = 'rahul';
        return (
          <Stack spacing={6}>
            <Input
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Button onClick={() => login(User, password)}>Login</Button>
          </Stack>
        );
      };

  return (
    <Stack spacing={6}>
              Tweet
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Authentication failed!</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" left="8px" />
        </Alert>
      )}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
      Authenticate Via Metamask
      </Button>
      <Text textAlign='center'>
          <em>or</em>
      </Text>
      <SignUp />
      <Text textAlign='center'>
          <em>or</em>
      </Text>
      <Login />
    </Stack>
  )
}