import { CSSProperties } from "react";
import Title from "./Title";
import PillButton from "../Main/PillButton";
type SubMenu3props = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  sub2title: string;
  button2text: string;
  fontColor: string;
};
const SubMenu3 = (props: SubMenu3props) => {
  const css: CSSProperties = {
    height: "450px",
    backgroundImage: `url(${props.backgroundImage})`,
    objectFit: "cover",
    backgroundPosition: "center center",
    textAlign: "center",
    padding: "15px",
  };
  const buttoncss: CSSProperties = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };
  const fontcss = {
    fontSize: "18px",
    fontWeight: 600,
    marginTop: "-12px",

    color: props.fontColor,
  };
  return (
    <div>
      <div style={css}>
        <Title color={props.fontColor} title={props.title} />
        <p style={fontcss}>iPhone 12 이상의 모델을 보상 판매하면 </p>
        <p style={fontcss}>₩200,000-₩930,000</p>
        <p style={fontcss}>상당의 크레딧이.</p>

        <div style={buttoncss}>
          <PillButton
            buttonText="견적 확인하기"
            buttonColor="blue"
            borderColor="blue"
            fontColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default SubMenu3;
