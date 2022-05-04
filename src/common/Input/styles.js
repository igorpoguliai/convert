import styled from "styled-components";

export const InputStyles = styled.input`
  width: 200px;
  height: 36px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #9aa0a6;
  padding-left: 12px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    border: 1px solid var(--accent-color);
  }
`;
