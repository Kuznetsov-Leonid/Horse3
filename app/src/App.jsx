import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scrollStyle/scrollStyle.css';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Contacts } from "./components/contacts/contacts";
import { CookieBaner } from "./components/cookieBaner/cookieBaner";
import Page404 from "./pages/paje404/paje404";
import Prelouder from './components/prelouder/prelouder';
import PrivacyPolicy from "./pages/pajePrivicy/privacyPolicy";
import PrivicyCookie from "./pages/pajePrivicy/privicyCookie";
import Services from "./components/services/services";

function App() {
  return (
    <>
      <Prelouder />
      <CookieBaner />
      <Header />
      <Services />
      <Contacts />
      <Page404 />
      <PrivacyPolicy />
      <PrivicyCookie />
      <Footer />
    </>
  );
}

export default App;
