import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import DashBoard from "./components/Dashboard/Dashboard/DashBoard";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
      
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:productId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
           <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
     
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
