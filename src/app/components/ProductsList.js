import React from "react";
import axios  from "axios";

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductsList: [],
            pages: [],
            productsPerPage: []

        };
    }
    componentDidMount() {
        const url = 'https://canastarosa.com/api/v1/market/products/'
        axios.get(url)
            .then(res => {
                const products = res.data;
                this.setState({ 
                    ProductsList : products,
                    pages: res.data.pages,
                    productsPerPage : res.data.results,
                 });
                console.log(this.state.ProductsList)
                console.log(this.state.pages)
                console.log(this.state.productsPerPage)
            });
    }
    render(){
        return(
             <div>
                <ul>
                     {this.state.productsPerPage.map((product)=> {return <li>{ product.name }</li> })}
                </ul>
            </div>
        )
    }
}

