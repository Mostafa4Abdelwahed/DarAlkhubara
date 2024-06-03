import { Link, NavLink } from "react-router-dom"
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiArticleNyTimesLight, PiCity } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = () => {
  return (
    <div  className="fixed -right-[100%] lg:right-0 w-[300px] h-full bg-primary-800 text-white">
        <ul className="mt-16 flex flex-col gap-1.5">
            <li>
                <NavLink style={isActive => ({backgroundColor: isActive ? "#AA8453" : "transparent"})} className="flex items-center shadow-md py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><IoHomeOutline />الصفحة الرئيسية</NavLink>
            </li>
            <li>
                <Link className="flex items-center py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><MdOutlineVilla />الوحدات</Link>
            </li>
            <li>
                <Link className="flex items-center py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><LiaUsersCogSolid />المكاتب</Link>
            </li>
            <li>
                <Link className="flex items-center py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><PiArticleNyTimesLight />المقالات</Link>
            </li>
            <li>
                <Link className="flex items-center py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><PiCity />المدن</Link>
            </li>
            <li>
                <Link className="flex items-center py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><IoSettingsOutline />الاعدادات</Link>
            </li>
            <li>
                <Link className="flex items-center py-2 px-3 transition-all hover:bg-primary-100 gap-2 text-lg" to="/"><IoIosLogOut />الاعدادات</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar