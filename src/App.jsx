import { HeaderInfos } from "./components/HeaderInfos"
import { HeaderNavbar } from "./components/HeaderNavbar"
import { Hero } from "./components/Hero"
import { SectionCustomPlans } from "./components/SectionCustomPlans"
import { SectionOurCoverages } from "./components/SectionOurCoverages"

function App() {
  return (
    <div>
      <header>
        <HeaderInfos />
        <HeaderNavbar />
      </header>
      <main>
        <Hero />
        <SectionCustomPlans />
        <SectionOurCoverages />

      </main>
    </div>
  )
}

export default App
