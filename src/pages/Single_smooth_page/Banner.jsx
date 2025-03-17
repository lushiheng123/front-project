import React from 'react'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BurgerImg from "../../assets/burger/burger5.png";
export default function Banner() {
    return (
        <div className='min-h-[550px]'>
            <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {/* 左边图片部分 */}

                        <div data-aos="flip-up">
                            <img src={BurgerImg} alt="biryani img" className='max-w-[430px] w-full mx-auto drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] ' />

                        </div>

                        {/* 右边文字部分 */}

                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 className='text-3xl sm:text-4xl font-bold' data-aos="fade-up" >Buy 2 burger get 1 free</h1>
                            <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odio dignissimos illum voluptatibus non optio aspernatur, delectus mollitia temporibus
                                <br />
                                  <br />
                                nostrum, possimus eos. Similique corporis consequatur earum voluptatum voluptas doloremque velit!</p>
                            <div className='flex gap-6'>
                                <div>
                                    <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100' />

                                </div>
                                <div>
                                    <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100' />

                                </div>
                                 <div>
                                    <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100' />

                                </div>
                            </div>
                            <div>
                                <button className="bg-gradient-to-r from-blue-500 to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                                    Order Now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
