import { CSSProperties, ReactNode } from "react";

type Headerprops = {
  children: ReactNode;
};
const Header = ({ children }: Headerprops) => {
  const headercss: CSSProperties = {
    backgroundColor: "#181818",
    position: "fixed",
    zIndex: 2,
    top: "0px",
    width: "100vw",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  };
  return (
    <header style={headercss}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </header>
  );
};

export default Header;
