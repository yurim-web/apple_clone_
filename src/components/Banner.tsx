import { CSSProperties } from "react";
import Headline from "./Headline";
import PillButton from "./PillButton";

const Banner = () => {
  const css: CSSProperties = {
    alignItems: "center",
    width: "100%",
    height: "400px",
    backgroundImage: `url("https://www.apple.com/kr/home/bv/images/heroes/apple-vision-pro/hero_apple_vision_pro_alt_announce__dvkmwlr7ihiu_largetall.jpg")`,
    backgroundPosition: "center center",
  };
  return (
    <div style={css}>
      <Headline title="Vision Pro" />
      <div style={{ display: "flex", gap: "10px" }}>
        <PillButton
          buttonText="더 알아보기"
          buttonColor="blue"
          borderColor="blue"
          fontColor="white"
        />
        <PillButton
          buttonText="사전 주문하기"
          buttonColor="white"
          borderColor="blue"
          fontColor="blue"
        />
      </div>
    </div>
  );
};

export default Banner;
