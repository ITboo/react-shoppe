import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Policy from "./pages/Policy";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="policy" element={<Policy />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="auth" element={<Auth />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
