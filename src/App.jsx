import { BrowserRouter, Route, Router, Routes } from "react-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Layout from "./components/Layout/Layout"
import ProductDetails from "./components/ProductDetails"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
