import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GridBackgroun from "./components/ui/GridBackgroun.jsx"; // Fixed typo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Load GraphQL API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: API_URL, // Load dynamically from env
  cache: new InMemoryCache(), // Apollo Client caching
  credentials: "include", // Allow cookies/session authentication
  fetchOptions: {
    mode: "cors", // Ensure cross-origin requests work
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GridBackgroun>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackgroun>
    </BrowserRouter>
  </React.StrictMode>
);
