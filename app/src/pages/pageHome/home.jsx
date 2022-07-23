import React from "react";
import Services from "../../components/services/services";
import { Contacts } from '../../components/contacts/contacts'; 
import CaruselList from "../../components/caruselList/caruselList";

const HomePage = () =>{
    return(
        <>
            <CaruselList />
            <Services />
            <Contacts />
        </>
    );
}

export default HomePage