import { CustomButton } from "../shared/Button";
import { HeroSection, Wrapper, BottomGradient } from "./style";

export function Hero() {
  return (
    <HeroSection>
      <Wrapper>
        <h2>Tranquilidade para viver mais</h2>
        <div>
          <p>Viva mais e melhor com os benefícios que um serguro de vida te oferece</p>
          <CustomButton>Faça sua cotação</CustomButton>
        </div>
      </Wrapper>
      <BottomGradient />
    </HeroSection>
  )
}