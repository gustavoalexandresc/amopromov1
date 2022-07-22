import { ButtonContainer } from "./style";

export function CustomButton(props) {
  return (
    <ButtonContainer
      theme={props.theme}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      flexDirection={props.flexDirection}
      {...props}
    >
      {props.children}
    </ButtonContainer>
  )
}