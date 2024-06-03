import 'photoswipe/dist/photoswipe.css'
import { MdLocalParking, MdOutlineVilla } from "react-icons/md"
import Container from "./../../Ui/Container"
import { FaCheck } from "react-icons/fa"
import { PiToilet } from "react-icons/pi"
import { TbMeterSquare, TbRulerMeasure } from "react-icons/tb"
import { GiNightSleep } from "react-icons/gi"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import ButtonLink from "../../Ui/ButtonLink"
import { Gallery, Item } from 'react-photoswipe-gallery'

const Estate = () => {
    return (
        <div>
            <Container>
                <div className="gallary p-2 my-7">
                    <Gallery>
                        <Item
                            original="https://res.cloudinary.com/demo/image/upload/dog.jpg"
                            width="1024"
                            height="768"
                        >{({ ref, open }) => (
                            <img ref={ref} className='h-[550px] w-auto mx-auto' onClick={open} src="https://res.cloudinary.com/demo/image/upload/dog.jpg" />
                        )}
                        </Item>
                        <Item
                            original="https://res.cloudinary.com/demo/image/upload/balloons.jpg"
                            width="1024"
                            height="768"
                        >{({ ref, open }) => (
                            <img ref={ref} className='d-none' onClick={open} src="" />
                        )}
                        </Item>
                        <Item
                            original="https://res.cloudinary.com/demo/image/upload/dog.jpg"
                            width="1024"
                            height="768"
                        >{({ ref, open }) => (
                            <img ref={ref} className='d-none' onClick={open} src="" />
                        )}
                        </Item>
                    </Gallery>
                </div>
            </Container>
            <div className="pb-10">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-7">
                        <div className="w-auto lg:w-8/12">
                            <div className="border-2 rounded p-5">
                                <div className="title flex justify-between items-center">
                                    <div>
                                        <span className="flex items-center gap-1"><MdOutlineVilla />فيلا</span>
                                        <h1 className="text-2xl font-bold">(لندن) بيت تأجير طويل المدى</h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-2xl font-bold text-primary-100 mb-2">6000.00 جنيه استرليني</h1>
                                        <span className="bg-primary-100 flex rounded text-white text-lg py-1 items-center justify-center gap-1">شهريا</span>
                                        <span className="bg-primary-100 flex rounded text-white text-lg py-1 items-center justify-center gap-1"><FaCheck />تأجير</span>
                                    </div>
                                </div>
                                <p className="leading-10 mt-5">
                                    <br />للأجار عقد طويل الأمد  ....!
                                    <br />للأجار فلا في مجمع سكني مع بوابة خاصة وكاميرات مراقبة وموقف للسيارة عبارة عن:-
                                    <br />خمس غرف نوم .
                                    <br />اربع حمامات .
                                    <br />صالة+وطاولة طعام+مطبخ.
                                    <br />مفروشة بالكامل + تكييف.
                                    للمزيد من المعلومات تواصل معنا على 55666966 <br />
                                </p>
                            </div>
                            <div className="border-2 rounded p-5 py-8 mt-5">
                                <h1 className="text-xl font-bold">معلومات أكثر</h1>
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 fle items-center justify-center rounded-full text-primary-100 p-1"><MdLocalParking /></div> <span>1</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 fle items-center justify-center rounded-full text-primary-100 p-1"><PiToilet /></div> <span>1</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 fle items-center justify-center rounded-full text-primary-100 p-1"><TbMeterSquare /></div> <span>1</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 fle items-center justify-center rounded-full text-primary-100 p-1"><TbRulerMeasure /></div> <span>150 <span className="text-[11px]">م2</span></span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 fle items-center justify-center rounded-full text-primary-100 p-1"><GiNightSleep /></div> <span>150 <span className="text-[11px]">م2</span></span>
                                    </span>
                                </div>
                            </div>
                            <div className="border-2 rounded p-5 py-8 mt-5">
                                <h1 className="text-xl font-bold">معلومات أكثر</h1>
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <span className="flex items-center gap-1 mt-8">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>وايفاي</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>المرافق (الماء والكهرباء)</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>وقوف السيارات / المرآب</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>حديقة</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>منطقة لعب الاطفال</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>مغسلة</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>مفروش بشكل كامل</span>
                                    </span>
                                    <span className="flex items-center gap-1 mt-5">
                                        <div className="bg-primary-100/15 rounded-full text-primary-100 ml-2 p-2"><FaCheck className="text-[10px]" /></div> <span>مطبخ مفتوح</span>
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="w-auto lg:w-4/12">
                            <div className="border-2 rounded p-5">
                                <h1 className="text-xl font-bold ">معلومات المكتب</h1>
                                <header className="flex items-center gap-2 mt-3">
                                    <img className="w-12 rounded-full" src="https://dkrqtr.ae/images/ProfileImage/6499577a73db7fb4a4e3195c1069b101.jpeg" alt="Logo" />
                                    <Link to="/" className="font-bold flex items-center gap-1">
                                        Dar Alkhobara Real Estate & Valuation <RiVerifiedBadgeFill className="text-primary-200 text-2xl" />
                                    </Link>
                                </header>
                                <div className="mt-6 text-sm/relaxed text-gray-700">
                                    <h1 className="text-md font-bold">البريد الإلكتروني: <a className="text-primary-100" href="mailto:info@dkrqtr.com">info@dkrqtr.com</a></h1>
                                    <h1 className="text-md font-bold">رقم الهاتف: <a className="text-primary-100" href="tel:00201282313371">00201014426851</a></h1>
                                    <h1 className="text-md font-bold">الواتس اب: <a className="text-primary-100" href="https://wa.me/00201282313371">00201282313371</a></h1>
                                </div>
                                <ButtonLink to="/">زيارة الملف</ButtonLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Estate