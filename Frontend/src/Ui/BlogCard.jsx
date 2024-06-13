import { Link } from "react-router-dom"

const BlogCard = ({article}) => {
    return (
        <div className="card bg-white border-2">
            <div className="thumbnail overflow-hidden h-72">
                <img className="h-72 transition-all hover:scale-125 w-full object-fill" src={article.image.url} alt="Thumbnail" />
            </div>
            <div className="content px-10 py-5">
                <Link to={`/articles/${article._id}`} className="text-xl font-medium transition-all hover:text-primary-100">{article.title}</Link>
                <p className="text-sm line-clamp-2 my-5">{article.content}</p>
                <Link to={`/articles/${article._id}`} className="text-lg hover:text-primary-100">عرض المقال</Link>
            </div>
        </div>
    )
}

export default BlogCard