import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const appId = "9F7HK55dDIIM9G4ns4BR6zJi0x9Pomf9kSgvFV8m";
const serverUrl = "https://wboglsovvoip.usemoralis.com:2053/server";

root.render(
  <StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </StrictMode>
);
