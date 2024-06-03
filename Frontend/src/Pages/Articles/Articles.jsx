import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Container from './../../Ui/Container'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import BlogCard from '../../Ui/BlogCard'
import { useEffect } from 'react'

const Articles = () => {
  useEffect(()=>{
    window.scroll(0, 0)
  },[])
  return (
    <div>
      <header className='bg-gray-200 py-12'>
        <Container>
          <Breadcrumb spacing='8px' separator={<IoIosArrowBack />}>
            <BreadcrumbItem>
              <Link to='/'>الصفحة الرئيسية</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>المقالات</BreadcrumbLink>
            </BreadcrumbItem>

          </Breadcrumb>
          <h1 className='text-3xl font-bold mt-1'>المقالات</h1>
        </Container>
      </header>
      <div className="content">
        <Container className="py-10">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Articles