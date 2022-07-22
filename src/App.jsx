import { HeaderInfos } from "./components/HeaderInfos"
import { HeaderNavbar } from "./components/HeaderNavbar"
import { Hero } from "./components/Hero"
import { SectionContacts } from "./components/SectionContacts"
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
        <SectionContacts />
      </main>
    </div>
  )
}

export default App
