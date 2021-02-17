import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin-top: 1rem;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 0.5rem;
  }
`;
export const CategoryPicker = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  overflow-x: auto;
`;
export const Category = styled.li`
  font-size: 14px;
  margin-right: 1.9rem;
`;
