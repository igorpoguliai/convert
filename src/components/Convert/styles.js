import styled from "styled-components";

export const Container = styled.div`
  max-width: 991px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BlockConvert = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: grid;
    grid-row-gap: 20px;
  }

  svg {
    fill: var(--accent-color);
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #98aac9;
  text-align: center;
  padding: 40px;
`;
