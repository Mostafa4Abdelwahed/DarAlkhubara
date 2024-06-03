import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Components/Layout"
import Home from "./Pages/Home/Home"
import Articles from "./Pages/Articles/Articles"
import Article from "./Pages/Articles/Article"
import Agents from "./Pages/Agents/Agents"
import Agent from "./Pages/Agents/Agent"
import Estate from "./Pages/Estate/Estate"
import Contact from "./Pages/Contact/Contact"
import Estates from "./Pages/Estates/Estates"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
