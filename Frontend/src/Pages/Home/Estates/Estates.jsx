import { Link } from "react-router-dom"
import Container from "./../../../Ui/Container"
import EstateCard from "./../../../Ui/EstateCard"

const Estates = () => {
  return (
    <div className="Estates">
      <Container className="bg-primary-800 pb-16">
        <h1 className="text-white text-3xl font-bold">آخر العقارات</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          <EstateCard />
          <EstateCard />
          <EstateCard />
        </div>
        <Link to="/estates" className="text-white mt-7 text-center py-3 rounded text-lg hover:bg-primary-200 bg-primary-100 block" >المزيد من العقارات</Link>
      </Container>
    </div>
  )
}

export default Estates