import { Link } from "react-router-dom"
import Container from "./../../../Ui/Container"
import EstateCard from "./../../../Ui/EstateCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchEstatesAsync } from "../../../Redux/Slices/estateSlice"

const Estates = () => {
  const dispatch = useDispatch();
  const [lastEstates, setLastEstates] = useState([]);
  const { estates } = useSelector((state) => state.estate)

  const fetchEstates = async () => {
    dispatch(fetchEstatesAsync());
    const lastData = estates.slice(0, 3);
    setLastEstates(lastData);
  }

  useEffect(() => {
    fetchEstates();
  }, [lastEstates]);

  return (
    <div className="Estates">
      <Container className="bg-primary-800 pb-16">
        <h1 className="text-white text-3xl font-bold">آخر العقارات</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          {
            lastEstates.map((estate) => {
              return (
                <EstateCard estate={estate} />
              )
            })
          }
        </div>
        <Link to="/estates" className="text-white mt-7 text-center py-3 rounded text-lg hover:bg-primary-200 bg-primary-100 block" >المزيد من العقارات</Link>
      </Container>
    </div>
  )
}

export default Estates