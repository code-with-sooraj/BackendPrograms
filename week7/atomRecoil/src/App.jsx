import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/count";
import './App.css'


function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count() {
  return <div>
    {/* <RecoilRoot> */}
      <CountRenderer />
      <Buttons />
    {/* </RecoilRoot> */}
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
}
export default App
