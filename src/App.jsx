
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeEcommerce from "./components/home"
import AddProducts from "./components/add"
// import HomeEcommerce from "./components/home"

function App() {
  return (
    <>
      <Router>
        {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          <Route path="/" element={<HomeEcommerce />} />
          <Route path="/add" element={<AddProducts />} />
          {/* <Route path="/update/:id" element={<UpdateProducts />} /> */}
        </Routes>
        {/* </Suspense> */}
      </Router>
    </>
  )
}

export default App
