import React from "react";
import SignUp from "./Sign_Up";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <SignUp />
            </div>
        </BrowserRouter>
    );
}

export default App;
