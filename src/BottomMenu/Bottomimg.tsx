import { CSSProperties } from "react";
import Button from "./Button";
type Bottomimgrprops = {
  img: string;
  text: string;
};

const Bottomimg = (props: Bottomimgrprops) => {
  const css: CSSProperties = {
    backgroundImage: `url(${props.img})`,
    width: "1024px",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={css}>
      <Button text={props.text} />
    </div>
  );
};

export default Bottomimg;
