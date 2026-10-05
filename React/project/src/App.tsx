import React from "react"
// import Home from "./pages/Home"
import Student from "./pages/Student"
import Studentarray from "./pages/Studentarray"
import Condition from "./components/Condition"
import Button from "./pages/Button"
import Welcome from "./pages/Welcome"
import Product from "./pages/Product"
import Dasboard from "./components/Dashboard"
import Count from "./pages/Count"
import Namechange from "./pages/Namechange"
import Colorchange from "./components/Colorchange"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"
import Bgcolor from "./components/Bgcolor"
import Passcheck from "./components/Passcheck"
import Register from "./components/Register"
import Todo from "./components/Todo"


function App(){
  const productlist:string[]=["mobile" , "lap" , "tv"]

  const name="anvika"

  return(
    <React.Fragment>
      {/* <h1>hlooo</h1>
      <h2>world</h2> */}

      {/* <Home></Home> */}

      <Student></Student>

      <Studentarray></Studentarray>
      <Condition></Condition>
      <Button></Button>
      <Welcome name={"annn"} age={50}></Welcome>

      <Product pro={productlist}></Product>

      <Dasboard user={name}></Dasboard>

      <Count></Count>
      <Namechange></Namechange>
      <Colorchange></Colorchange>
      <Counter></Counter>
      <Toggle></Toggle>
      <Bgcolor></Bgcolor>

      <Passcheck></Passcheck>
      <br />
      <Register></Register>
      <Todo></Todo>

      
    </React.Fragment>
  )
}

export default App