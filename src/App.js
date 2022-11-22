import React from "react";
import { ReactDOM } from "react-dom";
import BasicInfo from "./components/BasicInfo";
import About from "./components/About";
import './style/style.css';
import Footer from "./components/Footer";


const App = () => {
    return( 
        <div className="main-div">
            <div className="central-div">
                <BasicInfo />
                <About />
                <Footer />
            </div>
        </div> 
    );
}

export default App;