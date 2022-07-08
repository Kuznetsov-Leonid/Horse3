import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Contacts } from "./components/contacts/contacts";

function App() {
  return (
    <>
      <Header/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
