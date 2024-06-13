import { Link } from "react-router-dom"
import Container from "./../../../Ui/Container"
import BlogCard from "./../../../Ui/BlogCard"
import { useDispatch, useSelector } from "react-redux"
import { fetchArticlesAsync } from "../../../Redux/Slices/articleSlice"
import { useEffect, useState } from "react"

const Blogs = () => {
    const dispatch = useDispatch();
    const [lastArticles, setLastArticles] = useState([]);
    const { articles } = useSelector((state) => state.article)

    const fetchEstates = async () => {
        dispatch(fetchArticlesAsync());
        const lastData = articles.slice(0, 3);
        setLastArticles(lastData);
    }

    useEffect(() => {
        fetchEstates();
    }, [lastArticles]);

    return (
        <div className="bg-gray-200 py-20">
            <div className="title text-center">
                <h1 className="font-bold text-4xl">آخر المقالات</h1>
                <span className="w-28 h-1 mx-auto mt-3 block bg-primary-100"></span>
            </div>
            <div className="blogs">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {
                            lastArticles.map((article) => {
                                return (
                                    <BlogCard article={article} />
                                )
                            })
                        }
                    </div>
                    <Link to="/articles" className="text-white bg-primary-100 text-xl py-2 rounded mt-8 hover:bg-primary-200 text-center block">المزيد من المقالات</Link>
                </Container>
            </div>
        </div>
    )
}

export default Blogs