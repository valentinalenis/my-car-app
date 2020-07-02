import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import { store } from "./actions/store"
import Cars from "./components/Cars"
import { Container } from "@material-ui/core";

function App() {
  return (
   <Provider store={store}>
   <Container maxWidth="lg"></Container>
    <Cars/>
   </Provider>
  );
}

export default App;
