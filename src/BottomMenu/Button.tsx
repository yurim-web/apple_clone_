import { CSSProperties } from "react";

type Buttonprops = {
  text: string;
};
const Button = (props: Buttonprops) => {
  const css: CSSProperties = {
    backgroundColor: "white",
    border: "1px solid white",
    width: "120px",
    height: "45px",
    borderRadius: "60px",
    fontSize: "15px",
    fontWeight: 800,
  };
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: "30px", bottom: "-370px" }}>
        <button style={css}>지금 신청하기</button>
        <span
          style={{
            color: "white",
            marginLeft: "15px",
            fontSize: "19px",
            fontWeight: 700,
          }}
        >
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default Button;
