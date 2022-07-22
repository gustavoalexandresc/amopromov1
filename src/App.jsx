import { HeaderInfos } from "./components/HeaderInfos"
import { HeaderNavbar } from "./components/HeaderNavbar"
import { Hero } from "./components/Hero"

function App() {
  return (
    <div>
      <header>
        <HeaderInfos />
        <HeaderNavbar />
      </header>
      <main>
        <Hero />

      </main>
    </div>
  )
}

export default App
