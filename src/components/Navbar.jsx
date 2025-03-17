import Logo from "../assets/logo.png"

const menuItems = [
    {
        name: "Home",
        link:"/#",
    }, {
        name: "About",
        link:"/#about",
    }, {
        name: "Menu",
        link:"/#menu",
    },
    {
        name: "Services",
        link:"/#services",
    }
]
export default function Navbar() {
    return (
        <div className=" shadow-xl">
            <div className=" container py-3 sm:py-0  ">
                <div className="flex justify-between items-center">
                    {/* 左侧栏 */}
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl ">
                            <img src={Logo} alt="logo" className="w-16" />
                        </a>
                    </div>
                    {/* 右侧栏 */}
                    <div className="flex justify-between items-center gap-4">
                        <ul className="hidden sm:flex items-center gap-4 ">
                            {menuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a className="inline-block py-4 px-4 hover:text-blue-500 duration-300"> {item.name}
                                        </a>
                           
                                    </li>
                                )
                            })}
                        </ul>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-50 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">Order</button>
                    </div>
          

                </div>
            </div></div>
    );
}
