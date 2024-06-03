import { RiVerifiedBadgeFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const AgentCard = () => {
    return (
        <article className="flex relative bg-gray-200 transition hover:shadow-xl">
            <div className="rotate-180 [writing-mode:_vertical-lr]">
                <div
                    className="flex bg-primary-100 px-2 items-center justify-center gap-4 text-sm font-bold uppercase text-white"
                >
                    <span className="text-center">مكتب معتمد</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="block sm:basis-56">
                    <img
                        alt=""
                        src="https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg"
                        className="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div className="block">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link to="/">
                            <h3 className="font-bold text-xl flex items-center gap-1">
                                Dar Alkhobara Real Estate & Valuation <RiVerifiedBadgeFill className="text-primary-200" />
                            </h3>
                        </Link>

                        <div className="mt-2 text-sm/relaxed text-gray-700">
                            <h1 className="text-md font-bold">البريد الإلكتروني: <a className="text-primary-100" href="mailto:info@dkrqtr.com">info@dkrqtr.com</a></h1>
                            <h1 className="text-md font-bold">رقم الهاتف: <a className="text-primary-100" href="tel:00201282313371">00201014426851</a></h1>
                            <h1 className="text-md font-bold">الواتس اب: <a className="text-primary-100" href="https://wa.me/00201282313371">00201282313371</a></h1>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-end sm:justify-end md:absolute md:left-0 md:bottom-0">
                        <span className="block bg-primary-100 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary-200">
                            65 أعلانات
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AgentCard