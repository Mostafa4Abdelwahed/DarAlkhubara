import { useState } from "react";
import logo from "/logo.png"
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const links = [
        {
            name: "",
            href: "/",
            search: "?adType=Buy"
        },
        {
            name: "المقالات",
            href: "/articles",
        },
        {
            name: "المكاتب",
            href: "/agents",
        },
        {
            name: "تواصل معنا",
            href: "/contact",
        },
    ]
    return (
        <header className="bg-white py-2">
            <div className="mx-auto relative flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
                <Link to="/" className="block" href="#">
                    <img src={logo} className="w-[130px] h-[50px]" alt="Logo" />
                </Link>

                <div className="flex items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block mx-7">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link to="/" className="text-black font-medium transition hover:text-primary-100">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link to="/estates" className="text-black font-medium transition hover:text-primary-100">
                                    العقارات
                                </Link>
                            </li>
                            <li>
                                <a onClick={() => {
                                    navigate({
                                        pathname: "/estates",
                                        search: "?adType=Buy"
                                    })
                                }} className="text-black cursor-pointer font-medium transition hover:text-primary-100">
                                    مطلوب علي الفور
                                </a>
                            </li>
                            <li>
                                <Link to="/articles" className="text-black font-medium transition hover:text-primary-100">
                                    المقالات
                                </Link>
                            </li>
                            <li>
                                <Link to="/agents" className="text-black font-medium transition hover:text-primary-100">
                                    المكاتب
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-black font-medium transition hover:text-primary-100">
                                    تواصل معنا
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a className="block rounded bg-primary-100 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-200" target="_blank" href="https://wa.me/00201282313371">
                                طلب خاص
                            </a>
                        </div>

                        <button onClick={() => { setIsOpen(!isOpen) }}
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {
                        isOpen && <nav aria-label="Global" className="md:hidden z-40 transition-all absolute top-[100%] py-5 flex left-0 shadow-2xl right-0 md:bg-auto bg-primary-100 border-b-4 border-primary">
                            <ul className="flex items-center flex-col px-5 w-full gap-5 text-sm">
                                <li>
                                    <Link to="/" className="text-white font-bold transition">
                                        الرئيسية
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/estates" className="text-white font-bold transition">
                                        العقارات
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={() => {
                                        navigate({
                                            pathname: "/estates",
                                            search: "?adType=Buy"
                                        })
                                    }} className="text-white cursor-pointer font-bold transition">
                                        مطلوب علي الفور
                                    </a>
                                </li>
                                <li>
                                    <Link to="/articles" className="text-white font-bold transition">
                                        المقالات
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/agents" className="text-white font-bold transition">
                                        المكاتب
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-white font-bold transition">
                                        تواصل معنا
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    }


                </div>
            </div>
        </header>
    )
}

export default Navbar