import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="bg-primary-800 fixed left-0 right-0">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-2">
                <Link to="" className="text-white font-bold text-2xl">
                    لوحة التحكم
                </Link>

                <div className="flex items-center justify-end md:justify-between">

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <WrapItem>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                        </div>

                        <button
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
                </div>
            </div>
        </header>
    )
}

export default Navbar