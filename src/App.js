import "./App.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import TopCollection from './components/CollectionCards';
import History from "./components/History";
import MetroVerse from "./components/MetroVerse";
import Nav from "./components/Nav";
import NewNft from "./components/NewNft";
import NewNftCards from "./components/NewNftCards";
import TopCollection from "./components/TopCollection";
import Trending from "./components/Trending";
import VerticleTab from "./components/VerticleTab";
import TopSection from "./components/Topsection";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <div className="bg-[#EDF1F2]">      
      <div className="flex max-w-[1440px] mx-auto pr-3">
        <div>
          <VerticleTab />
        </div>
        <div className="w-full md:ps-5 ps-2">
          <TopSection />
          <BottomSection />
        </div>
      </div>
    </div>
  );
}

export default App;
