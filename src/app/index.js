import React from "react";
import { render } from "react-dom";

import { Item } from "./components/Item";

class App extends React.Component {
    render() {
        return (
            <div>
                 <Item/>
                <h1> hello, Im a pretty newcomponent</h1>          
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("canasta"));
