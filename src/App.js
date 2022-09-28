import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";

function App() {
return(
  <>
  <Home/>
  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter> */}
  </>
)
}

export default App;
