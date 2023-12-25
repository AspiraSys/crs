import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigate from "./routes/Navigate";
// import Drawers from "./components/Drawers";
// import NavBar from "./components/NavBar";

function App() {
  return(
    <>
      <BrowserRouter>
        {/* <NavBar/> */}
      {/* <Drawers /> */}
        <Navigate/>
      </BrowserRouter>
    </>
  )}

export default App;
