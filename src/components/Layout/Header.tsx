import { CSSProperties, ReactNode } from "react";

type Headerprops = {
  children: ReactNode;
};
const Header = ({ children }: Headerprops) => {
  const headercss: CSSProperties = {
    backgroundColor: "#181818",
    width: "100%",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    padding: "0px 50px",
  };
  return <header style={headercss}>{children}</header>;
};

export default Header;
