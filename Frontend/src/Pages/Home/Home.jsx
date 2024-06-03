import Alert from "./Alert/Alert"
import Blogs from "./Blogs/Blogs"
import Estates from "./Estates/Estates"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import Location from "./Location/Location"
import Regions from "./Regions/Regions"

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Estates />
      <Regions />
      <Blogs />
      <Alert />
      <Location />
    </div>
  )
}

export default Home