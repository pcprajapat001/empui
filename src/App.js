import logo from "./logo.svg";
import "./App.css";
import { Addemp } from "./components/Addemp";
import { EmpList } from "./components/EmpList";
import { Landing } from "./components/Landing";
import "./components/common.css"

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "silver" }}>
      {/* <Addemp /> */}
      <Landing />
    </div>
  );
}

export default App;
