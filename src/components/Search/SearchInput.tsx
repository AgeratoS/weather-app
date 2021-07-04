import styled from "styled-components";
import { palette } from "../../theme/colors"
import { spacings } from "../../theme/spacings";
import { icons } from "../../theme/icons";

export const SearchInput = styled.input`
  padding: 20px 40px 20px 70px;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  opacity: .8;
  color: ${palette.purple};
  border-color: ${palette.purple};
  border-radius: ${spacings.s8};
  background: url(${icons.search}) no-repeat ${spacings.s24} center;
  background-size: ${spacings.s24};
  transition: all .2s ease-in;
  
  outline: none;
  -webkit-appearance: none;
  
  &:focus {
    opacity: 1;
  }
`