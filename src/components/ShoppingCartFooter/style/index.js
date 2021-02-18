import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  padding: 2rem 4.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;
export const SideWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  p {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 2rem;
    font-weight: 600;
  }
  button {
    &:focus {
      outline: none;
    }
  }
  ${({ theme }) => theme.mediaQ.md} {
    p {
      font-size: 2.5rem;
    }
  }
  ${({ theme }) => theme.mediaQ.xl} {
    p {
      font-size: 3rem;
    }
  }
`;
export const BuyButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #fff;
  border-radius: 15px;
  font-size: 1.6rem;
  font-weight: 600;
  ${({ theme }) => theme.mediaQ.xl} {
    font-size: 2rem;
    padding: 1rem 2rem;
    &:hover {
      background-color: #eca716;
    }
  }
`;
export const ShareCart = styled.button`
  text-decoration: underline;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.6rem;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    svg {
      font-size: 2rem;
    }
  }
`;
