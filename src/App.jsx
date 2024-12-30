import Footer from './component/Footer'
import Header from './component/Header'
import FirstSection from './component/FirstSection'
import New from './component/newProject/new'
import SecondSection from './component/SecondSection'
import ThirdSection from './component/ThirdSection'
import FourthSection from './component/FourthSection'
import FifthSection from './component/FifthSection'
import SixthSection from './component/SixthSection'
import { useEffect } from 'react'
import MobileSlider from './component/MobileSlider'
import YoutubeFunctionality from './component/YoutubeFunctionality'

function App() {
  useEffect(()=>{
    document.title="Apple replica";
  },[]);
  
  return (
    <>
      <Header />
      {/* <New /> */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YoutubeFunctionality />
      <Footer />
      <MobileSlider />
    </>
  )
}

export default App
