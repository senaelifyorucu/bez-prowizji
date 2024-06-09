
import Adverts from "@/components/adverts/Adverts"
import NieruchomosciCarousel from "@/components/nieruchomosci-carousel/NieruchomosciCarousel"
import EstateSearch from "@/components/search/EstateSearch"
import Info from "@/components/info/Info"
import BeforeAfterCarousel from "@/components/beforeaftercarousel/BeforeAfterCarousel"


export default function Home() {
  return <main>
    <EstateSearch />
    <Adverts />
    <NieruchomosciCarousel />
    <Info />
    <BeforeAfterCarousel />
  </main>
}
