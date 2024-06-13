import { GiNightSleep } from "react-icons/gi"
import { GoClockFill } from "react-icons/go"
import { MdLocalParking, MdOutlineVilla } from "react-icons/md"
import { PiToilet } from "react-icons/pi"
import { TbMeterSquare, TbRulerMeasure } from "react-icons/tb"
import { Link } from "react-router-dom"

const EstateCard = ({estate}) => {
    const dateTime = new Date(estate.createdAt);
    const date = dateTime.toLocaleDateString("en-GB");
    return (
        <div className="card relative bg-white border-2">
            <div className="absolute right-5 top-5 flex gap-3">
                <span className={`text-white px-4 py-1 flex items-center justify-center ${estate.adType === "بيع" ? "bg-red-600" : "bg-green-600"}`}> {estate.adType} </span>
                <span className="bg-primary-100 text-white px-4 py-1 flex items-center justify-center"> {estate.city} </span>
            </div>
            <Link to={`/estate/${estate._id}`} className="thumbnail w-full h-64 overflow-hidden">
                <img className="w-full h-64" src={estate.image.url} alt="Thumbnail" />
            </Link>
            <div className="header mt-3 px-7">
                <div className="flex gap-5 mb-2">
                    <span className="flex gap-1 items-center"><MdOutlineVilla className="text-primary-100" />{estate.estateType}</span>
                    <span className="flex gap-1 items-center"><GoClockFill className="text-primary-100" />{date}</span>
                </div>
                <Link to={`/estate/${estate._id}`} className="text-xl font-bold hover:text-primary-100">{estate.title}</Link>
            </div>
            <div className="content border-y-2 flex flex-wrap justify-center gap-2 py-4 mt-5 px-7">
                {estate.details.parking !== 0 && <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <MdLocalParking className="text-primary-100" />
                    {estate.details.parking}
                </span>}
                {estate.details.toilet !== 0 && <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <PiToilet className="text-primary-100" />
                    {estate.details.toilet}
                </span>}
                {estate.details.rooms !== 0 && <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <GiNightSleep className="text-primary-100" />
                    {estate.details.rooms}
                </span>}
                {estate.details.buildingErea !== 0 && <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <TbMeterSquare className="text-primary-100" />
                    {estate.details.buildingErea}
                </span>}
                {estate.details.landArea !== 0 && <span className="text-center w-12 transition-all hover:bg-gray-200 flex flex-col items-center justify-center rounded border-2 px-4 py-2">
                    <TbRulerMeasure className="text-primary-100" />
                    {estate.details.landArea}
                </span>}
            </div>
            <div className="footer flex items-center justify-between px-7 py-3">
                <div className="flex gap-1 items-center">
                    <img className="rounded-full w-10 h-10" src={estate.agent.logo.url} alt="Picture Profile" />
                    <h1 className="line-clamp-1 text-xs">{estate.agent.name}</h1>
                </div>
                <h1 className="text-gray-400 text-sm text-center">{estate.price} {estate.currency}</h1>
            </div>
        </div>
    )
}

export default EstateCard