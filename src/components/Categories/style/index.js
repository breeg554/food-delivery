import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 0.5rem;
  }
  ${({ theme }) => theme.mediaQ.md} {
    max-width: 700px;
    display: flex;
    align-items: flex-end;
    & > div:nth-of-type(1) {
      order: 2;
    }
    & > div:nth-of-type(2) {
      flex-grow: 1;
      order: 1;
    }
  }
  ${({ theme }) => theme.mediaQ.xl} {
    max-width: 900px;
    h1 {
      font-size: 3.4rem;
    }
  }
  ${({ theme }) => theme.mediaQ.lg} {
    max-width: 1050px;
    h1 {
      font-size: 5rem;
    }
  }
`;

export const CategoryPicker = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  overflow-x: auto;
`;
export const Category = styled.li`
  margin-right: 1.9rem;
  button {
    color: ${({ theme, active }) => (active ? theme.colors.yellow : theme.colors.dark)};
    font-size: 14px;
    background-color: transparent;
    border: none;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    margin-right: 2.5rem;
    button {
      font-size: 1.6rem;
    }
  }

  ${({ theme }) => theme.mediaQ.lg} {
    button {
      font-size: 1.8rem;
    }
  }
`;
