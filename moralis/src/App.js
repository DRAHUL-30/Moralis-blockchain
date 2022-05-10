import React from "react";
import { Container, Heading, Button } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { Auth } from "./Auth";

function App() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome {user.attributes.username} </Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Auth />
    </Container>
  );
}

export default App;
