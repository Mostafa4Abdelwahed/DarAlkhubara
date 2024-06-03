import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import Container from "./../../Ui/Container"
import EstateCard from "./../../Ui/EstateCard"
import { RiVerifiedBadgeFill } from "react-icons/ri"

const Agent = () => {
    return (
        <div>
            <header className='bg-gray-200 py-12'>
                <Container>
                    <Breadcrumb spacing='8px' separator={<IoIosArrowBack />}>
                        <BreadcrumbItem>
                            <Link to='/'>الرئيسية</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/agents'>المكاتب</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink className="line-clamp-1">Dar Alkhobara Real Estate & Valuation</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div>
                    <h1 className='text-3xl flex items-center gap-1 font-bold mt-1'>Dar Alkhobara Real Estate & Valuation <RiVerifiedBadgeFill className="text-primary-200" /></h1>
                    </div>
                </Container>
            </header>
            <main className="py-14">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <EstateCard />
                        <EstateCard />
                        <EstateCard />
                        <EstateCard />
                        <EstateCard />
                        <EstateCard />
                    </div>
                </Container>
            </main>
        </div>
    )
}

export default Agent