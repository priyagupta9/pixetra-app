import "./App.css";
import Home from "./component/HomePage/Home";
import PassBook from "./component/PassBookPage/PassBook";
import ProductFlow from "./component/ProductFlowP1Page/ProductFlow";
import Imagepicker from "./component/Imagepicker/Imagepicker";
import Product from "./component/ProductsPage/Product";
import Otp from "./component/OtpPage/Otp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginInfo from "./component/LoginInfoPage/LoginInfo";
import LoginScreen from "./component/LoginScreenPage/LoginScreen";
import ErrorPage from "./component/ErrorPage/Error";

function App() {
  return (
    <div>
      <Router forceRefresh={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginScreen" element={<LoginScreen />} />
          <Route path="/login" element={<LoginInfo />} />
          <Route path="/otplogin" element={<Otp />} />
          {/* <Route path='/pixetra' /> */}
          {/* <Route path='/productsState' element={<ProductState />} /> */}
          <Route path="/products" element={<Product />} />
          <Route path="/product/:slug" element={<ProductFlow />} />
          <Route path="/pick-image" element={<Imagepicker />} />
          <Route path="/passbook" element={<PassBook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
