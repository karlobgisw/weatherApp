import { useState } from "react"
import Home from "./components/Home";
import GetStarted from "./components/GetStarted";

function App() {
  const [started, setStarted] = useState(true);
  return(
    <>
        {started ? <GetStarted setStarted={setStarted}></GetStarted> : <Home></Home>}
    </>
  )
}

export default App
