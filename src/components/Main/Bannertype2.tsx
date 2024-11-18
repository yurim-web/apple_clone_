import { CSSProperties } from "react";
import Headline from "./Headline";
import PillButton from "./PillButton";
type Bannertype2props = {
  backgroundImage: string;
  title: string;
  subtitle: string;
};

const Bannertype2 = (props: Bannertype2props) => {
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
              buttonText="선물 쇼핑하기"
              buttonColor="blue"
              borderColor="blue"
              fontColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannertype2;
