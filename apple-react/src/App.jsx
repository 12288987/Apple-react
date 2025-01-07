import Footer from "./component/Footer";
import Header from "./component/Header";
import FirstSection from "./component/FirstSection";
import New from "./component/newProject/new";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import FourthSection from "./component/FourthSection";
import FifthSection from "./component/FifthSection";
import SixthSection from "./component/SixthSection";
import { useEffect } from "react";
import MobileSlider from "./component/MobileSlider";
import YoutubeFunctionality from "./component/YoutubeFunctionality";
import Main from "./component/Main";
import Iphone from "./component/pages/Iphone";
import Mac from "./component/pages/Mac";
import { Route, Routes } from "react-router-dom";
import Search from "./component/pages/Search";
import Cart from "./component/pages/Cart";
import SharedElement from "./component/SharedElement";
import Notfoundpage from "./component/Notfoundpage";
import Productpage from "./component/pages/Productpage";

function App() {
  useEffect(() => {
    document.title = "Apple replica";
  }, []);

  return (
    <>
      {/* <New /> */}
      <Routes>
        <Route path="/" element={<SharedElement />}>
          <Route index element={<Main />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:lastUrl" element={<Productpage />} />
          <Route path="mac" element={<Mac />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
      {/* <MobileSlider /> */}
    </>
  );
}

export default App;
