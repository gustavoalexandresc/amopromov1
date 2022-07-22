import { Container } from "./style";

export function Card({
  imageUrl,
  title,
  description,
  onClick,
}) {
  return (
    <Container>
      <img src={imageUrl} />
      <h6>{title}</h6>
      <p>{description}</p>
      <button onClick={onClick}>Saiba Mais</button>
    </Container>
  )
}