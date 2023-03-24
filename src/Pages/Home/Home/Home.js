import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Appointment from './AppointmentSection/AppointmentSection';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <InfoCards></InfoCards>
             <Services></Services>
             <Appointment></Appointment>
             <Testimonials></Testimonials>
             <ContactUs></ContactUs>
        </div>
    );
};

export default Home;