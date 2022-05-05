import styled from "styled-components";

export const Container = styled.div`
  max-width: 991px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BlockConvert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: grid;
    grid-row-gap: 20px;
  }

  @media (max-width: 575px) {
    select,
    input {
      max-width: 170px;
    }
  }

  @media (max-width: 374px) {
    select,
    input {
      max-width: 155px;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #98aac9;
  text-align: center;
  padding: 40px;

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

export const ButtonReverse = styled.button`
  cursor: pointer;
  background: none;

  svg {
    fill: var(--accent-color);

    @media (max-width: 575px) {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 374px) {
      width: 25px;
      height: 25px;
    }
  }
`;
