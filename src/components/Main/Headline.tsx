import { CSSProperties } from "react";
import { FaApple } from "react-icons/fa";

type Headlineprops = {
  title: string;
  text: string;
};

const Headline = (props: Headlineprops) => {
  const titlecss: CSSProperties = {
    fontSize: "40px",
  };

  return (
    <div>
      <h1 style={titlecss}>
        <FaApple />
        {props.title}
      </h1>
      <p style={{ fontSize: "18px", fontWeight: 550 }}>{props.text}</p>
    </div>
  );
};

export default Headline;
