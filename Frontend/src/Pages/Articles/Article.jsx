import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import Container from "../../Ui/Container"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { CiCalendarDate } from "react-icons/ci"

const Article = () => {
    return (
        <div>
            <header className='bg-gray-200 py-12'>
                <Container>
                    <Breadcrumb spacing='8px' separator={<IoIosArrowBack />}>
                        <BreadcrumbItem>
                            <Link to='/'>الصفحة الرئيسية</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/articles'>المقالات</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink className="line-clamp-1">كأس العالم 2022 ومدى تأثيره على العقار في قطر</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className='text-3xl font-bold mt-1'>كأس العالم 2022 ومدى تأثيره على العقار في قطر</h1>
                </Container>
            </header>
            <div className="content">
                <Container>
                    <div className="flex flex-col md:flex-row gap-7">
                        <div className="border-2 my-7 py-7 px-10 w-auto md:w-8/12">
                            <h1 className="text-2xl font-bold">كأس العالم 2022 ومدى تأثيره على العقار في قطر</h1>
                            <span className="flex gap-1 items-center mt-1"><CiCalendarDate />20/6/2024</span>
                            <img className="w-full h-[400px] object-contain my-0 md:my-5" src="https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg" alt="Thumbnail" />
                            <p className="text-gray-500 text-xl">لوحظ في الآونه الأخيره وأثناء تواجد الزوار لحضور مباريات كأس العالم 2022 في قطر تزايد كثرة الطلب في دار الخبراء للعقارات والتثمين على العقارات في قطر وخصوصا في مناطق تملك الغير قطريين لوجود الكثير من التسهيلات ومن أهمها الإقامة الدائمة والتي يسعى لها الكثير ليتمكنوا من الحصول على فرصة العمل والإندماج مع المجتمع القطري لما رأوه في التعامل من قبل المواطنين والمقيمين في حسن التعامل ومستوى الأمن والأمان في دولة قطر.
                                وكثير ممن يرغبون في شراء العقارات هم من ذوي الكفاءات والشهادات العليا و التجار الذين يرغبون في المشاركة في استكمال بناء قطر الحديثة والإنخراط في المجتمع سواء في سوق العمل او المدارس لما رأوه من التسهيلات ومن رقي المؤسسات الصحية التي يتمناها الفرد لأسرته.
                                وبالمقارنة بالدول المكتملة في الأقتصاد الكلي من بنى تحتيه ومن مدارس و مؤسسات صحيه و جامعات و خدمات فإن قطر دولة محط الأنظار للجميع لما فيها راحه للأسرة وأفرادها واكتمال جميع البنى التحتية بأعلى المعايير والمواصفات العالمية.
                            </p>
                        </div>
                        <div className="another my-7 py-7 px-5 border-2 h-auto w-auto md:w-4/12">
                            <h1 className="text-3xl font-bold mb-7">مقالات اخري</h1>
                            <ul className="flex flex-col gap-5">
                                <li className="border-2 rounded-md py-5 px-3">
                                    <Link>
                                        <h1 className="text-xl font-bold hover:text-primary-100" to="">
                                            لماذا جاء الهكسوس علي مصر
                                        </h1>
                                        <span className="flex gap-1 items-center mt-1"><CiCalendarDate />20/6/2024</span>
                                    </Link>
                                </li>
                                <li className="border-2 rounded-md py-5 px-3">
                                    <Link>
                                        <h1 className="text-xl font-bold hover:text-primary-100" to="">
                                            لماذا جاء الهكسوس علي مصر
                                        </h1>
                                        <span className="flex gap-1 items-center mt-1"><CiCalendarDate />20/6/2024</span>
                                    </Link>
                                </li>
                                <li className="border-2 rounded-md py-5 px-3">
                                    <Link>
                                        <h1 className="text-xl font-bold hover:text-primary-100" to="">
                                            لماذا جاء الهكسوس علي مصر
                                        </h1>
                                        <span className="flex gap-1 items-center mt-1"><CiCalendarDate />20/6/2024</span>
                                    </Link>
                                </li>
                                <li className="border-2 rounded-md py-5 px-3">
                                    <Link>
                                        <h1 className="text-xl font-bold hover:text-primary-100" to="">
                                            لماذا جاء الهكسوس علي مصر
                                        </h1>
                                        <span className="flex gap-1 items-center mt-1"><CiCalendarDate />20/6/2024</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Article