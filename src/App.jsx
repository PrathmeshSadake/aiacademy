import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
