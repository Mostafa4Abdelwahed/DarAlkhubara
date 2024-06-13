import { Link, createSearchParams, useNavigate } from "react-router-dom"

const RegionCard = ({city}) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
            navigate({
                pathname: "/estates",
                search: `?${createSearchParams({
                    city: city.name
                })
            }`
            })
    }
    return (
        <a className="cursor-pointer" onClick={handleClick}>
            <img className="rounded-xl" src={city.image.url} alt="Thumbnail" />
            <h1 className="font-bold text-xl text-center mt-3">{city.name} - {city.country}</h1>
        </a>
    )
}

export default RegionCard