import Header from "./components/Layout/Header";
import {Fragment} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <Fragment>
            <h2>Let's get started!</h2>
            <Cart />
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    )
}

export default App;
