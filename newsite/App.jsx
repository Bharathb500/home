import Banner from "./src/components/Banner/Banner"
import Header from "./src/components/Header/Header"
import {BannerImage} from './src/assets/images/banner-portfolio-design-agency-leicester-1024x475.jpg'
import BannerContent from "./src/components/Banner/BannerContent"
import Aboutme from "./src/components/AboutMe/Aboutme"

function App() {
  return (
    <>
        <Header/>
        <Banner image={BannerImage}>
            <BannerContent/>
        </Banner>
        <Aboutme/>
    </>
  )
}

export default App