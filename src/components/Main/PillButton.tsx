import { CSSProperties } from "react";
import { colorMap, MainColor } from "../../styles/Color";

type PillButtonprops = {
  buttonText: string;
  buttonColor: MainColor;
  borderColor: MainColor;
  fontColor: MainColor;
};

const PillButton = (props: PillButtonprops) => {
  const css: CSSProperties = {
    borderRadius: "50px",
    padding: "10px 18px",
    font: "14px",
    color: colorMap[props.fontColor],
    border: `1px solid ${colorMap[props.borderColor]}`,
    backgroundColor: colorMap[props.buttonColor],
    fontWeight: 600,
  };
  return (
    <div>
      <button style={css}>{props.buttonText}</button>
    </div>
  );
};

export default PillButton;
