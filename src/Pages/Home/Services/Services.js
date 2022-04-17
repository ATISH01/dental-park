import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='row g-0 service py-5'>
            <h1 className='text-center mt-4'>Services</h1>
            {
                services.map(service => <Service service={service}></Service>)
            }

        </div>
    );
};

export default Services;