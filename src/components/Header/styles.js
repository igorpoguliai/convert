import styled, { css } from "styled-components";

export const StylesHeader = styled.header`
  height: 70px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-color);
  border-bottom: 2px solid #98aac9;
  font-size: 19px;
  line-height: 24px;

  div {
    padding: 15px;

    &:first-child {
      border-right: 1px solid #98aac9;

      ${({ isLoading }) =>
        isLoading &&
        css`
          border: none;
        `}
    }
  }
`;
