
import React,{useEffect,useState} from 'react'
import burger1 from "../../assets/burger/burger1.png"
import burger2 from "../../assets/burger/burger2.png"
import burger3 from "../../assets/burger/burger3.png"
const ServicesData = [
  {
    id: 1,
    img: burger1,
    name: "Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: burger2,
    name: "Chiken Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: burger3,
    name: "Veg Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
export default function Services() {
  return (
    <div className='bg-gray-100'>
      <div className='py-12 lg:py-20'>
        <div className='container'>
          <div className='text-center mb-20 max-w-[400] mx-auto'>
            <p data-aos="fade-up " className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-blue-500'>
              Our Services
            </p>
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl font-bold' >Services</h1>
            <p data-aos="fade-up" data-aos-delay="400" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
            {ServicesData.map((service) => (
              <div key={service.id} data-aos="fade-up" data-aos-delay={service.aosDelay} className='rounded-2xl bg-white hover:bg-blue-500 hover:text-white relative shadow-xl  max-w-[300px] group'>
                <div className='h-[100px]'>
                  <img src={service.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300' />
                </div>
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{service.name}</h1>
                  <p className='text-gray-500 group-hover:text-white  text-sm line-clamp-2'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
}
