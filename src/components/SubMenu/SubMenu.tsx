import { CSSProperties } from "react";
import Title from "./Title";
import PillButton from "../Main/PillButton";
type SubMenuprops = {
  backgroundImage: string;
};
const SubMenu = (props: SubMenuprops) => {
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
    paddingTop: "255px",
  };

  return (
    <div>
      <div style={css}>
        <Title color="white" title="iPhone 16" />
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
        <p style={{ fontSize: "13px", fontWeight: 600, paddingBottom: "8px" }}>
          Apple Intelligence, 현재 미국 영어로 서비스중
        </p>
      </div>
    </div>
  );
};

export default SubMenu;
