import React from 'react';
import { DataServices } from '../../data/DataServices';
import { Store } from '../storePrototype/store';
import './style.css';

const Services = () => {
    return(
        <div>
            <Store 
                data  = {DataServices} 
                title = 'Услуги'
                className = 'Services'
            />
        </div>
    );
}

export default Services