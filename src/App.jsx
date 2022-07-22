import { HeaderInfos } from "./components/HeaderInfos"
import { HeaderNavbar } from "./components/HeaderNavbar"
import { Hero } from "./components/Hero"
import { SectionCustomPlans } from "./components/SectionCustomPlans"

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

      </main>
    </div>
  )
}

export default App
