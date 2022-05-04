import styled, { css } from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 12px;
  pointer-events: none;
  svg {
    fill: #9aa0a6;
    transition: transform 0.2s ease;
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
        fill: var(--accent-color);
      }
    `}
`;

export const SelectStyled = styled.select`
  width: 200px;
  height: 36px;
  border-radius: 4px;
  padding: 6px 30px 6px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  appearance: none;
  cursor: pointer;
  &:focus {
    outline: 0;
    border: 1px solid var(--accent-color);
    background: var(--background-color);
  }
`;
