import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Components/Layout"
import Home from "./Pages/Home/Home"
import Articles from "./Pages/Articles/Articles"
import Article from "./Pages/Articles/Article"
import Agents from "./Pages/Agents/Agents"
import Agent from "./Pages/Agents/Agent"
import Estate from "./Pages/Estates/Estate"
import Contact from "./Pages/Contact/Contact"
import Estates from "./Pages/Estates/Estates"
import LayoutDash from './Dashboard/Components/Layout'
import Dashboard from "./Dashboard/Dashboard"
import EstatesDash from "./Dashboard/Estates/Estates"
import AddEstate from "./Dashboard/Estates/Pages/AddEstate"
import UpdateEstate from "./Dashboard/Estates/Pages/UpdateEstate"
import AgentsDash from "./Dashboard/Agents/Agents"
import ArticlesDash from "./Dashboard/Articles/Articles"
import Cities from "./Dashboard/Cities/Cities"
import Settings from "./Dashboard/Settings/Settings"
import AddAgent from "./Dashboard/Agents/Pages/AddAgent"
import UpdateAgent from "./Dashboard/Agents/Pages/UpdateAgent"
import AddArticle from "./Dashboard/Articles/Pages/AddArticle"
import UpdateArticle from "./Dashboard/Articles/Pages/UpdateArticle"
import AddCity from "./Dashboard/Cities/Pages/AddCity"
import UpdateCity from "./Dashboard/Cities/Pages/UpdateCity"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/estates" element={<Estates />} />
          <Route path="/estates/:id" element={<Estate />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<Agent />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/dashboard" element={<LayoutDash />}>
          <Route index element={<Dashboard />} />
          <Route path="estates">
            <Route index element={<EstatesDash />} />
            <Route path="add" element={<AddEstate />} />
            <Route path=":id" element={<UpdateEstate />} />
          </Route>
          <Route path="agents">
            <Route index element={<AgentsDash />} />
            <Route path="add" element={<AddAgent />} />
            <Route path=":id" element={<UpdateAgent />} />
          </Route>
          <Route path="articles">
            <Route index element={<ArticlesDash />} />
            <Route path="add" element={<AddArticle />} />
            <Route path=":id" element={<UpdateArticle />} />
          </Route>
          <Route path="cities">
            <Route index element={<Cities />} />
            <Route path="add" element={<AddCity />} />
            <Route path=":id" element={<UpdateCity />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
