import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Container from "./../../Ui/Container"
import { IoIosArrowBack } from "react-icons/io"
import AgentCard from "../../Ui/AgentCard"

const Agents = () => {
    return (
        <div>
            <header className='bg-gray-200 py-12'>
                <Container>
                    <Breadcrumb spacing='8px' separator={<IoIosArrowBack />}>
                        <BreadcrumbItem>
                            <Link to='/'>الصفحة الرئيسية</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>المكاتب</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className='text-3xl font-bold mt-1'>المكاتب</h1>
                </Container>
            </header>
            <main>
                <Container className="py-10">
                    <div className="flex flex-col gap-6">
                        <AgentCard />
                        <AgentCard />
                        <AgentCard />
                        <AgentCard />
                    </div>
                </Container>
            </main>
        </div>
    )
}

export default Agents