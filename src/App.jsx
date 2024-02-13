import { Route, Routes } from "react-router-dom";
import Home from "./component/routes/homepage.component";
import Navigation from "./component/routes/Navigation/navbar.component";
import Shop from "./component/routes/shop.component";
import SignIn from "./component/routes/authentication/authentication.component";
import CheckOut from "./component/routes/checkout/check-out.component";

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="auth" element={<SignIn/>}/>
      <Route path="checkout" element={<CheckOut/>}/>
    </Route>
   </Routes>
  )
}
export default App;
