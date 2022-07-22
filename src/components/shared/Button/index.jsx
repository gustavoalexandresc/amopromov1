import { ButtonContainer } from "./style";

export function CustomButton(props) {
  return (
    <ButtonContainer
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      {...props}
    >
      {props.children}
    </ButtonContainer>
  )
}