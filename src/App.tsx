import Headertext from "./components/Headertext";
import Headline from "./components/Headline";
import PillButton from "./components/PillButton";

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
      <header
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
      </header>
      <Headline title="iPad mini" />
      <div style={{ display: "flex", gap: "10px" }}>
        <PillButton
          buttonText="더 알아보기"
          buttonColor="blue"
          borderColor="blue"
          fontColor="white"
        />
        <PillButton
          buttonText="사전 주문하기"
          buttonColor="white"
          borderColor="blue"
          fontColor="blue"
        />
      </div>
    </div>
  );
}

export default App;
