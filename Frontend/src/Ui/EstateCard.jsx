import { GiNightSleep } from "react-icons/gi"
import { GoClockFill } from "react-icons/go"
import { MdLocalParking, MdOutlineVilla } from "react-icons/md"
import { PiToilet } from "react-icons/pi"
import { TbMeterSquare, TbRulerMeasure } from "react-icons/tb"
import { Link } from "react-router-dom"

const EstateCard = () => {
    return (
        <div className="card relative bg-white border-2">
            <div className="absolute right-5 top-5 flex gap-3">
                <span className="bg-red-600 text-white px-4 py-1 flex items-center justify-center"> بيع </span>
                <span className="bg-primary-100 text-white px-4 py-1 flex items-center justify-center"> ارض النفاق </span>
            </div>
            <Link className="thumbnail w-full h-64 overflow-hidden">
                <img className="w-full h-64" src="https://dkrqtr.ae/images/PropertyImage/90ca0883361c3dac5f6d186660e8df1b.png" alt="Thumbnail" />
            </Link>
            <div className="header mt-3 px-7">
                <div className="flex gap-5 mb-2">
                    <span className="flex gap-1 items-center"><MdOutlineVilla className="text-primary-100" />فيلا</span>
                    <span className="flex gap-1 items-center"><GoClockFill className="text-primary-100" />منذ 4 شهور</span>
                </div>
                <Link className="text-xl font-bold hover:text-primary-100">(لندن) بيت تأجير طويل المدى</Link>
            </div>
            <div className="content border-y-2 flex flex-wrap justify-center gap-2 py-4 mt-5 px-7">
                <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <MdLocalParking className="text-primary-100" />
                    1
                </span>
                <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <PiToilet className="text-primary-100" />
                    4
                </span>
                <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <TbMeterSquare className="text-primary-100" />
                    150
                </span>
                <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <TbRulerMeasure className="text-primary-100" />
                    150
                </span>
                <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <GiNightSleep className="text-primary-100" />
                    5
                </span>
            </div>
            <div className="footer flex items-center justify-between px-7 py-3">
                <div className="flex gap-1 items-center">
                    <img className="rounded-full w-10 h-10" src="https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg" alt="Picture Profile" />
                    <h1 className="line-clamp-1 text-xs">Dar Alkhobara Real Estate & Valuation</h1>
                </div>
                <h1 className="text-gray-400 text-sm text-center">6000.00 جنيه استرليني شهرياً</h1>
            </div>
        </div>
    )
}

export default EstateCard