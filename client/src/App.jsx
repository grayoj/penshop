import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductPage from "./pages/ProductsPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductPage />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/Signin">{user ? <Redirect to="/" /> : <Signin />}</Route>
        <Route path="/Signup">
          {user ? <Redirect to="/" /> : <Signup />}
        </Route>
      </Switch>
    </Router>
  );
};



export default App;
