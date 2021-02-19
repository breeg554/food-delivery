import { useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import lottie from "lottie-web";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  a {
    font-size: 1.6rem;
  }
  h1 {
    font-size: 2rem;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    h1 {
      font-size: 4rem;
    }
  }
`;
const Animation = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
`;
const Preparation = () => {
  const container = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const pushOne = () => {
      history.go(1);
    };
    window.addEventListener("popstate", pushOne);
    return () => window.removeEventListener("popstate", pushOne);
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../utils/delivery-animation.json"),
    });
  }, []);
  return (
    <Wrapper>
      <Animation ref={container} />
      <h1>Kurier jest w drodze!</h1>
      <Link to="/">Strona główna</Link>
    </Wrapper>
  );
};

export default Preparation;
