import "./Hero.css"
import Container from "../../../Ui/Container"
import FilterBox from "../../../Ui/FilterBox"

const Hero = () => {
    return (
        <div className="hero-section flex justify-center flex-col gap-3 py-24">
            <Container>
                <div className="title">
                    <h1 className="text-3xl text-white font-bold mb-5">ابحث عما تود الحصول عليه ...</h1>
                    <span className="bg-primary-100 text-white p-2 px-4 rounded">لدينا اكثر من 62+ عقار في موقعنا</span>
                </div>
                <FilterBox />
            </Container>
        </div>
    )
}

export default Hero