import React from "react";
import PIC from "./asset/navLogo.jpg"

{/* adding a navbar */}
const Switch = () => {
    return (
        <React.Fragment>
            <header>
                <img className="logo" src= {PIC} alt="logo"/>
                    <nav>
                        <ul className="navbar">
                            <li><a href="/Page.html">About Us</a> </li>
                            <li><a href="#">Career</a> </li>
                            <li><a href="#">Departments</a> </li>
                            <li><a href="./sign">sign in</a></li>
                        </ul>
                    </nav>
            </header>
        </React.Fragment>
    )
};

export default Switch;