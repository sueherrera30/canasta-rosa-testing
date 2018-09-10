import React from "react";
import { render } from "react-dom";
import { Item } from "./components/Item";
import { ProductsList } from "./components/ProductsList";


class App extends React.Component {
    render() {
        return (
            <div>
                 <Item/>
                <h1> hello, Im a pretty newcomponent</h1>  
                <ProductsList/>        
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("canasta"));
