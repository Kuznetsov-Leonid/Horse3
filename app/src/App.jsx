import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scrollStyle/scrollStyle.css';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Contacts } from "./components/contacts/contacts";
import Page404 from "./pages/paje404/paje404";

function App() {
  return (
    <>
    
      <Header/>
      <Contacts/>
      <Page404/>
      <Footer/>
      
    </>
  );
}

export default App;
