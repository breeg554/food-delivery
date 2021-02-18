import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { StyledPreloader } from "./style";
const Preloader = () => {
  const container = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/loading-animation.json"),
    });
  }, []);
  return (
    <StyledPreloader>
      <div ref={container} />
    </StyledPreloader>
  );
};

export default Preloader;
