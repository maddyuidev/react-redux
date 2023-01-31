import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/products/ProductDetail";
import Header from "./components/layouts/Header";

function App() {
  return (
    <div className="col-sm-12">
      <Header />
      <div className="mt-5">
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        {/* <Home /> */}
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
