import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"
import Container from "./../../Ui/Container"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import ButtonLink from "../../Ui/ButtonLink"

const Contact = () => {
    return (
        <div>
            <header className='bg-gray-200 py-12'>
                <Container>
                    <Breadcrumb spacing='8px' separator={<IoIosArrowBack />}>
                        <BreadcrumbItem>
                            <Link to='/'>الصفحة الرئيسية</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>تواصل معنا</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className='text-3xl font-bold mt-1'>تواصل معنا</h1>
                </Container>
            </header>
            <div className="steps">
                <Container className="py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 flex-col gap-5">
                        <div className="box border-2 rounded-md py-3 px-5">
                            <div className="flex items-center gap-2">
                                <span className="text-xl w-8 h-8 flex text-center items-center justify-center text-white px-2 bg-primary-100 rounded-full">1</span>
                                <h1 className="text-xl font-bold text-primary-100 cursor-default">الخطوة الأولي</h1>
                            </div>
                            <p className="text-lg max-w-lg mt-2">التسجيل عبر الموقع عن طريق ارسال البيانات الأساسية للمكتب او الشركة، مثل اسم الشركة البريد الإلكتروني، رقم الجوال</p>
                        </div>
                        <div className="box border-2 rounded-md py-3 px-5">
                            <div className="flex items-center gap-2">
                                <span className="text-xl w-8 h-8 flex text-center items-center justify-center text-white px-2 bg-primary-100 rounded-full">2</span>
                                <h1 className="text-xl font-bold text-primary-100 cursor-default">الخطوة الثانية</h1>
                            </div>
                            <p className="text-lg max-w-lg mt-2">تفعيل الحساب بعد ارسال كافة المستندات المطلوبة من قبل المكتب وتوقيع العقود والمستندات تفعيل الحساب بعد ارسال كافة المستندات المطلوبة من قبل المكتب وتوقيع العقود والمستندات</p>
                        </div>
                        <div className="box border-2 rounded-md py-3 px-5">
                            <div className="flex items-center gap-2">
                                <span className="text-xl w-8 h-8 flex text-center items-center justify-center text-white px-2 bg-primary-100 rounded-full">3</span>
                                <h1 className="text-xl font-bold text-primary-100 cursor-default">الخطوة الثالثة</h1>
                            </div>
                            <p className="text-lg max-w-lg mt-2">إضافة العقارات والوحدات الى لوحة التحكم مع امكانية اضافة كافة التفاصيل الخاصة بالعقارات</p>
                        </div>
                        <div className="box border-2 rounded-md py-3 px-5">
                            <div className="flex items-center gap-2">
                                <span className="text-xl w-8 h-8 flex text-center items-center justify-center text-white px-2 bg-primary-100 rounded-full">4</span>
                                <h1 className="text-xl font-bold text-primary-100 cursor-default">الخطوة الرابعة</h1>
                            </div>
                            <p className="text-lg max-w-lg mt-2">البدء في تلقي طلبات العملاء المهتمين عبر المكالمات الهاتفية او البريد الإلكتروني مع التحكم الشامل للطلبات الخاصة عبر لوحة التحكم</p>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className="bg-primary-100 py-10 text-white">
                <div className="flex flex-col md:flex-row gap-7">
                    <div className="register-form w-auto md:w-7/12">
                        <h1 className="text-2xl font-bold">إستمارة تسجيل</h1>
                        <div className="form bg-white text-black p-4 py-7 rounded-md mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <FormControl>
                                    <FormLabel>اسم الشركة</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>أسمك بالكامل</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>بريدك الالكتروني</FormLabel>
                                    <Input type='email' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>رقم الهاتف</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                            </div>
                            <FormControl className="mt-3">
                                <FormLabel>الرسالة</FormLabel>
                                <Textarea rows="7" />
                            </FormControl>
                            <ButtonLink to="/" >أرسل</ButtonLink>
                        </div>
                    </div>
                    <div className="contact w-auto md:w-4/12">
                        <div className="border-2 border-white/50 p-5 rounded-md">
                            <h1 className="text-xl font-bold">كن على تواصل معنا</h1>
                            <span className="w-[80px] h-[2px] bg-white/55 200 block mt-2" />
                            <ul className="mt-5 flex flex-col gap-4">
                                <li>
                                    <h1 className="text-lg font-bold text-white">العنوان : <a className="block text-sm font-normal" href="#">الدوحة - قطر</a></h1>
                                </li>
                                <li>
                                    <h1 className="text-lg font-bold text-white">رجل الجوال : <a className="block text-sm font-normal" href="tel:00201282313371">00201282313371</a></h1>
                                </li>
                                <li>
                                    <h1 className="text-lg font-bold text-white">البريد الإلكتروني : <a className="block text-sm font-normal" href="mailto:info@dkrqtr.com">info@dkrqtr.com</a></h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact