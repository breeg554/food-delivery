import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.08);
  padding: 0 1.5rem;
  margin-bottom: 2rem;
  border-radius: 20px;
  svg {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
  }
  ${({ theme }) => theme.mediaQ.md} {
    margin: 0;
    max-width: 280px;
  }
`;
export const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 1rem;
  &:focus {
    outline: none;
  }
`;
