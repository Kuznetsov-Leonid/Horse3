import React from "react";
import { BrowserRouter, Route, NavLink, Routes, widthRouter } from 'react-router-dom';
import HomePage from "../pages/pageHome/home";
import PageContacts from "../pages/pageContacts/pageContacts";
import Page404 from '../pages/page404/page404';
import PageServices from '../pages/pajeServices/pageServices';
import AboutUs from "../pages/pageAboutUs/AboutUs";
import AboutSite from "../pages/pageAboutSite/AboutSite";
import Gallery from '../pages/pageGallery/Gallery';
import StoreHorse from "../pages/pageStoreHorse/StoreHorse";
import { Header } from '../components/header/header';

const AppRouter = () => {
    return(
        <BrowserRouter forceRefresh={true} basename="/">
            <Header />
            <Routes>
                <Route exact path ="/" element={<HomePage />} /> 
                <Route exact path ="/PageContacts" element={<PageContacts />} />
                <Route exact path ="/PageServices" element={<PageServices />} />
                <Route exact path ="/AboutUs" element={<AboutUs />} />
                <Route exact path ="/AboutSite" element={<AboutSite />} />
                <Route exact path ="/Gallery" element={<Gallery />} />
                <Route exact path ="/StoreHorse" element={<StoreHorse />} />
                <Route exact path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter