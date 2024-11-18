import { CSSProperties } from "react";
import Headline from "./Headline";
import PillButton from "./PillButton";
type Bannerprops = {
  backgroundImage: string;
  title: string;
  subtitle: string;
};

const Banner = (props: Bannerprops) => {
  const css: CSSProperties = {
    alignItems: "center",
    width: "100%",
    height: "600px",
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundPosition: "center center",
  };
  const buttoncss: CSSProperties = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };
  return (
    <div style={css}>
      <div style={{ paddingTop: "350px" }}>
        <div style={{ textAlign: "center" }}>
          <Headline title={props.title} text={props.subtitle} />
          <div style={buttoncss}>
            <PillButton
              buttonText="더 알아보기"
              buttonColor="blue"
              borderColor="blue"
              fontColor="white"
            />
            <PillButton
              buttonText="사전 주문하기"
              buttonColor="transparent"
              borderColor="blue"
              fontColor="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
