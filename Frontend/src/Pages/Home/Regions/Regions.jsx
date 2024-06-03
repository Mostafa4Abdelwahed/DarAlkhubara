import { Link } from "react-router-dom"
import RegionCard from "./RegionCard"
import Container from "./../../../Ui/Container"

const Regions = () => {
    return (
        <div>
            <div className="title text-center py-16">
                <h1 className="text-3xl font-bold mb-2">ابحث عن إعلانات في هذه المدن</h1>
                <p>يمكنك الإطلاع على أحدث عروض البيع والشراء والإيجار في هذه المدن</p>
            </div>
            <div className="regions">
                <Container>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mb-16">
                        <RegionCard />
                        <RegionCard />
                        <RegionCard />
                        <RegionCard />
                        <RegionCard />
                        <RegionCard />
                        <RegionCard />
                        <RegionCard />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Regions