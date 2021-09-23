import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Cart from "./components/Cart";

function App() {
    return (
        <div>
        <Navbar/>

        <Switch>
            <Route path="/" component={ProductList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
            <div className="container">

            </div>


        </div>
    );
}

export default App;
