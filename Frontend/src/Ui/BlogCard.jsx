import { Link } from "react-router-dom"

const BlogCard = () => {
    return (
        <div className="card bg-white border-2">
            <div className="thumbnail overflow-hidden h-72">
                <img className="h-72 transition-all hover:scale-125 w-full object-fill" src="https://dkrqtr.ae/images/articleImages/fe67c81666c505b048a2d1882535b193.jpeg" alt="Thumbnail" />
            </div>
            <div className="content px-10 py-5">
                <Link to="" className="text-xl font-medium transition-all hover:text-primary-100">كأس العالم 2022 ومدى تأثيره على العقار في قطر</Link>
                <p className="text-sm line-clamp-2 my-5">لوحظ في الآونه الأخيره وأثناء تواجد الزوار لحضور مباريات كأس العالم 2022 في قطر تزايد كثرة الطلب في لوحظ في الآونه الأخيره وأثناء تواجد الزوار لحضور مباريات كأس العالم 2022 في قطر تزايد كثرة الطلب في</p>
                <Link className="text-lg hover:text-primary-100">عرض المقال</Link>
            </div>
        </div>
    )
}

export default BlogCard