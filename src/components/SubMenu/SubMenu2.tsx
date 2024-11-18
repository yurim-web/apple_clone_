import { CSSProperties } from "react";
import Title from "./Title";
import PillButton from "../Main/PillButton";
type SubMenu2props = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  sub2title: string;
  button2text: string;
  fontColor: string;
};
const SubMenu2 = (props: SubMenu2props) => {
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

  return (
    <div>
      <div style={css}>
        <Title color={props.fontColor} title={props.title} />
        <p
          style={{
            fontSize: "18px",
            fontWeight: 600,
            marginTop: "-20px",
            color: props.fontColor,
          }}
        >
          {props.subtitle}
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            marginTop: "-15px",
            color: "grey",
          }}
        >
          {props.sub2title}
        </p>
        <div style={buttoncss}>
          <PillButton
            buttonText="더 알아보기"
            buttonColor="blue"
            borderColor="blue"
            fontColor="white"
          />
          <PillButton
            buttonText={props.button2text}
            buttonColor="transparent"
            borderColor="blue"
            fontColor="blue"
          />
        </div>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            paddingTop: "212px",
            color: `${props.fontColor}`,
          }}
        >
          Apple Intelligence, 현재 미국 영어로 서비스중
        </p>
      </div>
    </div>
  );
};

export default SubMenu2;
