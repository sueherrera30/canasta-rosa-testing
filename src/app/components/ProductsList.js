import React from "react";
import axios  from "axios";

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductsList: []
        };
    }
    componentDidMount() {
        const url = 'https://canastarosa.com/api/v1/market/products/'
        axios.get(url)
            .then(res => {
                const products = res.data;
                console.log(products)
                this.setState({ products });
            });
    }
    render(){
        return(
             <div>
                   
            </div>
        )
    }
}

