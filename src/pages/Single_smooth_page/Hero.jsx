import React,{useEffect,useState} from 'react'
import burger1 from "../../assets/burger/burger1.png"
import burger2 from "../../assets/burger/burger2.png"
import burger3 from "../../assets/burger/burger3.png"
import Vector from "../../assets/Vector.png"
const hamburgerItems = { burger1, burger2, burger3 }
export default function Hero() {
    const [focus_image, setFocusimage] = useState(burger1)
    const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
    return (
        <div className='min-h-[650px] bg-gray-100 ' style={bgImage}>
            <div className='min-h-[650px] backdrop-blur-md flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>

                        {/* 左边文字部分 */}
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                            <h1
                                data-aos="zoom-out"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                Welcome to{" "}
                                <span
                                    className="bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-500 drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                                    style={{
                                        filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                                    }}
                                >
                                    Burger
                                </span>{" "}
                                King
                            </h1>
                            <p className="text-sm " data-aos="fade-up">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Eaque reiciendis inventore iste ratione ex alias quis magni at
                                optio
                            </p>
                            <div  data-aos="fade-up" data-aos-delay="300">
                                <button className="bg-gradient-to-r from-blue-500 to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        
                        {/* 右边图片部分 */}
                    
                        <div className='min-h-[400px] flex justify-center items-center relative order-1 sm:order-2'>
                            <div data-aos="fade-left" data-aos-delay="300">
                                <img
                                    src={focus_image}
                                    alt="burger"
                                    className='max-w-[430] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]'
                                />


                            </div>
                            <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full'>
                                {Object.values(hamburgerItems).map((item, index) => (
                                    <div data-aos="zoom-in" data-aos-offset="0" key={index}>
                                        <img
                                       
                                            src={item}
                                            alt="burger"
                                            onClick={() => {
                                                setFocusimage(index === 0
                                                    ? burger1
                                                    : index === 1
                                                        ? burger2
                                                        : burger3)
                                            }}
                                            className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
