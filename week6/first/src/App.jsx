import { useState } from 'react'

function App() {
  
  return (
    <div>
      <HeaderWithButton/>
      <Header title="Sharma"></Header>
      <Header title="Sharma"></Header>
      <Header title="Sharma"></Header>
      <Header title="Sharma"></Header>

    </div>
  )
}

function HeaderWithButton(){
  const [title,setTitle] = useState("My name is Sooraj");
  function updateTitle(){
    setTitle("My name is: "+ Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click on me</button>
      <Header title={title}></Header>
    </div>)
}


function Header(props){
  return <h1>{props.title}</h1>
}
export default App
