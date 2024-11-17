import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;
