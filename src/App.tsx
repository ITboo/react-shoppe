import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Policy from "./pages/Policy";
import Shop from "./pages/Shop";

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='policy' element={<Policy />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
