import { Children } from "react";
import Headertext from "./components/Headertext";
import Headline from "./components/Headline";
import Header from "./components/Layout/Header";
import PillButton from "./components/PillButton";
import Banner from "./components/Banner";

function App() {
  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* <header
        style={{
          backgroundColor: "#181818",
          width: "100%",
          height: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Headertext menuTitle="스토어" />
        <Headertext menuTitle="Mac" />
        <Headertext menuTitle="iPad" />
        <Headertext menuTitle="iPhone" />
        <Headertext menuTitle="Mac" />
        <Headertext menuTitle="Mac" />
        <Headertext menuTitle="Mac" />
      </header> */}
      <Header
        children={
          <>
            <Headertext menuTitle="스토어" />
            <Headertext menuTitle="Mac" />
            <Headertext menuTitle="iPad" />
            <Headertext menuTitle="iPhone" />
            <Headertext menuTitle="Mac" />
            <Headertext menuTitle="Mac" />
            <Headertext menuTitle="Mac" />
          </>
        }
      />
      <Banner />
    </div>
  );
}

export default App;
