import React, { Component } from "react";
import ButtonComponent from "../../../functional/button/button";
import Spinner from "react-bootstrap/esm/Spinner";
import CardComponent from "../../../functional/button/card/card";

class Mounting extends Component {
    constructor() {
        console.log("constructor");
        super();
        this.state = {
            products: [],
            message: "Good Evening" 
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => this.setState({ products: json }));
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
        return null;
    }

    render() {
        console.log("render");
        return(
            <>
                <h3>Mounting phase</h3>
                {this.state.products.length > 0 ? (
                    this.state.products.map(eachproduct => {
                        const { title } = eachproduct;
                        return (
                            <div key={eachproduct.id}>
                                {/* <h1>{title}</h1> */}
                                <CardComponent product={eachproduct}/>
                               
                            </div>
                        );
                    })
                ) : (
                    <Spinner />
                )}
            </>
        );
    }
}

export default Mounting;









