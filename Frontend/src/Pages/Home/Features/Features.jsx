import Container from "./../../../Ui/Container"
import { HiOutlineHandThumbUp } from "react-icons/hi2"
import { BiBuildingHouse } from "react-icons/bi"
import { RxLightningBolt } from "react-icons/rx"

const Features = () => {
    return (
        <div>
            <Container className="bg-primary-800">
                <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-16">
                    <div className="box text-white flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center justify-center bg-primary-100 h-[100px] w-[100px] text-5xl rounded-full">
                            <HiOutlineHandThumbUp />
                        </div>
                        <h1 className="font-bold my-3 text-2xl">هدفنا</h1>
                        <p className="text-center">نسعى في دار الخبراء جاهدين لإرضاء عملائنا عن طريق مساعدتهم في كل ما يتعلق ببيع، شراء وتأجير العقارات أو إدارتها مع ضمان الجودة والكفاءة والمصداقية واعلى درجات الأمانة</p>
                    </div>
                    <div className="box text-white flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center justify-center bg-primary-100 h-[100px] w-[100px] text-5xl rounded-full">
                            <BiBuildingHouse />
                        </div>
                        <h1 className="font-bold my-3 text-2xl">رسالتنا</h1>
                        <p className="text-center">في دار الخبراء، نتبع مفهومًا واضحًا ونهج عمل يضمن حصول عملائنا على عقار مميز، عبر تلبية متطلباتهم، مراعين الميزانية, الجودة والمكان وإيجاد ما يحلمون به فيما يخص السكن أو الاستثمار</p>
                    </div>
                    <div className="box text-white flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center justify-center bg-primary-100 h-[100px] w-[100px] text-5xl rounded-full">
                        <RxLightningBolt />
                        </div>
                        <h1 className="font-bold my-3 text-2xl">رؤيتنا</h1>
                        <p className="text-center">نسعى في دار الخبراء لكي نكون من أكبر الشركات في مجال التسويق العقاري على المستوى المحلي والعالمي، بأحدث التقنيات، وبخبرات فنية محلية ذات مهارات عالية.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Features