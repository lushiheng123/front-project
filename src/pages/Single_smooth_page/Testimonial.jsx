    import React from 'react'
    import Slider from "react-slick"
    const settings = {
    dots: false,
    arrows: false,
    loop: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    };
    const TestimonialData = [
    {
        id: 1,
        name: "Samuel",
        testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "John Doe",
        testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith",
        testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
    ];
    export default function Testimonial() {
        return (
            <div className='py-10'>
                <div className='container'>
                    <div className='text-center mb-20 max-w-[400] mx-auto'>
                        <p data-aos="fade-up " className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-blue-500'>
                            Our Services
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl font-bold' >Services</h1>
                        <p data-aos="fade-up" data-aos-delay="400" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,</p>
                    </div>


                    <div className='max-w-[600px] mx-auto'>

                        <Slider {...settings}>
                            {TestimonialData.map((testimonial) => (
                                <div key={testimonial.id}>
                                    <div className='text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5'>
                                        <img src={testimonial.img} alt="" className='rounded-full block mx-auto' />
                                    </div>
                                    <p className="text-gray-500 text-sm">{testimonial.testimonial}</p>
                                    <h1 className="text-xl font-bold">{testimonial.name}</h1>
                                </div>
                            ))}


                        </Slider>
                    </div>

                </div>




            </div>
        );
    }
