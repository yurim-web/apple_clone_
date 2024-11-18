import { CSSProperties } from "react";
import Headline from "./Headline";
import PillButton from "./PillButton";
import Headtitle3 from "./Headtitle3";
type Bannertype3props = {
  backgroundImage: string;
  title: string;
  subtitle: string;
};

const Bannertype3 = (props: Bannertype3props) => {
  const css: CSSProperties = {
    alignItems: "center",
    width: "100%",
    height: "600px",
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundPosition: "center center",
    textAlign: "center",
  };
  const buttoncss: CSSProperties = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };
  return (
    <div style={css}>
      <Headtitle3 />
      <div style={{ paddingTop: "360px" }}>
        <div style={buttoncss}>
          <PillButton
            buttonText="더 알아보기"
            buttonColor="blue"
            borderColor="blue"
            fontColor="white"
          />
          <PillButton
            buttonText="구입하기"
            buttonColor="transparent"
            borderColor="blue"
            fontColor="blue"
          />
        </div>
        <p style={{ color: "grey" }}>
          Apple Intelligence, 현재 미국 영어로 서비스 중
        </p>
      </div>
    </div>
  );
};

export default Bannertype3;
