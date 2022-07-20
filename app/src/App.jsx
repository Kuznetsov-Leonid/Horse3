import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scrollStyle/scrollStyle.css';
import Prelouder from './components/prelouder/prelouder';
import { CookieBaner } from './components/cookieBaner/cookieBaner';
import AppRouter from "./router/appRouter";
import { Footer } from './components/footer/footer';

const App = () => {
  return (
    <>
      <Prelouder />
      <CookieBaner />
      <AppRouter/>
      <Footer/>
    </>
  );
}

export default App;
