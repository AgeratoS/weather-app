import styled from "styled-components";
import { palette } from "../../theme/colors"

export const SearchInput = styled.input`
  padding: 20px 120px 20px 40px;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  color: ${palette.purple};
  outline: none;
  
  &:focus {
    outline: none;
  }
`