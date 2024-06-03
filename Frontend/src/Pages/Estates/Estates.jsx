import { useEffect } from "react"
import Container from "../../Ui/Container"
import EstateCard from "../../Ui/EstateCard"
import FilterBox from "../../Ui/FilterBox"

const Filter = () => {
    useEffect(() => {
        window.scroll(0, 0)
      }, [])    
    return (
        <div>
            <Container className="bg-gray-200 pb-5 pt-1">
                <FilterBox />
            </Container>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                </div>
            </Container>
        </div>
    )
}

export default Filter