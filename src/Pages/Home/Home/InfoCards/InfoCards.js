import React from 'react';
import clock from "../../../../assets/icons/clock.svg"
import marker from "../../../../assets/icons/marker.svg"
import phone from "../../../../assets/icons/phone.svg"
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoData = [
        {
            id: 1,
            title: 'Opening Hours',
            img: clock,
            bgClass: 'bg-primary',
            description:'Lorem Ipsum is simply dummy text of the pri'
        },
        {
            id: 2,
            title: 'Visit our location',
            img: marker,
            bgClass: 'bg-black',
            description:'Lorem Ipsum is simply dummy text of the pri'
        },
        {
            id: 3,
            title: 'Contact us now',
            img: phone,
            bgClass: 'bg-primary',
            description:'+000 123 456789'
        }
    ]
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                infoData.map((info) =><InfoCard key={info.id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;