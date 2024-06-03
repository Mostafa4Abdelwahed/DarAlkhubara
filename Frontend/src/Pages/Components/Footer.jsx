import { FaFacebookF, FaInstagram } from "react-icons/fa"
import Container from "./../../Ui/Container"
import Logo from "/logo.png"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Container className="bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-20">
        <div className="about">
          <img src={Logo} alt="Logo" width="150" />
          <p className="text-gray-300 leading-7 mt-4">
            دار الخبراء للعقارات والتثمين، موقع متخصص في عروض البيع والشراء والإيجار لجميع أنواع العقارات في قطر، مصدرك الأول للعقارات في الدوحة، لوسيل، الخليج الغربي، وغيرها
          </p>
          <div className="flex gap-3 text-gray-300 mt-5">
            <a href="#" className="hover:text-primary-100">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary-100">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary-100">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="contact">
          <h1 className="text-xl text-white font-bold mb-5">تفاصيل التواصل</h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-300">الدوحة - قطر</h1>
            <a href="#" className="text-white">01014426851</a>
            <a href="#" className="text-white">info@dkrqtr@gmail.com</a>
          </div>
        </div>

        <div className="links">
          <h1 className="text-xl text-white font-bold mb-5">روابط سريعة</h1>
          <Link className="text-white transition-all hover:text-primary-100 block" to="/articles">المقالات</Link>
          <Link className="text-white transition-all hover:text-primary-100 block mt-1" to="/property">عقار</Link>
        </div>
      </div>
      <div className="text-white border-t-2 border-gray-600 text-center py-7">© 2024 <a className="text-primary-100" href="#">دار الخبراء للعقارات والتثمين</a> جميع الحقوق محفوظة</div>
    </Container>
  )
}

export default Footer