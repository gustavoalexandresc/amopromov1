import { ButtonContainer } from "./style";

export function CustomButton(props) {
  return (
    <ButtonContainer {...props}>
      {props.children}
    </ButtonContainer>
  )
}