import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import RegionCard from "./RegionCard"
import Container from "./../../../Ui/Container"
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesAsync } from "../../../Redux/Slices/citySlice";

const Regions = () => {
    const dispatch = useDispatch();
    const [lastCities, setLastCities] = useState([]);
    const { cities } = useSelector((state) => state.city)


    const fetchCities = () => {
        dispatch(fetchCitiesAsync());
        const lastData = cities.slice(0, 8);
        setLastCities(lastData);
    }
    useEffect(() => {
        fetchCities();
    }, [cities])


    return (
        <div>
            <div className="title text-center py-16">
                <h1 className="text-3xl font-bold mb-2">ابحث عن إعلانات في هذه المدن</h1>
                <p>يمكنك الإطلاع على أحدث عروض البيع والشراء والإيجار في هذه المدن</p>
            </div>
            <div className="regions">
                <Container>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mb-16">
                        {
                            lastCities.map((city) => {
                                return (
                                    <RegionCard city={city} />
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Regions