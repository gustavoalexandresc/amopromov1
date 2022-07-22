import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > div {
    width: 25%;
    height: 4px;
  }

  div:nth-child(1) {
    background: #64BA00;
  }

  div:nth-child(2) {
    background: #68629C;
  }

  div:nth-child(3) {
    background: #FFD012;
  }
  
  div:nth-child(4) {
    background: #007E47;
  }
`