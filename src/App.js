import Header from "./components/Layout/Header";
import {Fragment} from "react";
import Meals from "./components/Meals/Meals";

function App() {
    return (
        <Fragment>
            <h2>Let's get started!</h2>
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    )
}

export default App;
