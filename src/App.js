import "./App.scss";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import HomePage from "./pages/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:id">
            <User />
          </Route>
          <Route exact path="/newuser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
