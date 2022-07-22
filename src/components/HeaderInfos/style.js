import styled from 'styled-components'
import { Devices } from '../../utils/devices'

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0;

  background: #03341C;

  @media (${Devices.mobile}) {
    display: none;
  }

  span {
    display: inline-block;
    color: #FFFFFF;
    font-size: 0.813rem;
    margin-right: 1.25rem;
  }

  img {
    margin-right: 0.25rem;
  }

  a {
    color: #FFB31A;
    font-size: 1rem;
    text-decoration: none;

    transition: filter 0.2s;

    & + img {
      margin-left: 1rem;
    }

    &:hover {
      filter: opacity(0.8);
    }
  }

`