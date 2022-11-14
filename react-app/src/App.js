import React from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DUsers from "./components/DUsers";
import Container from "@mui/material/Container";



function App() {

  return (
    <Provider store={store}>
     
        <Container maxWidth="lg">
          <DUsers />
        </Container>
     
    </Provider>
  );
}

export default App;
