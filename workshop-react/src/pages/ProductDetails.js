import React, { Component } from 'react';
import products from '../products.json';
import Product from '../Components/Product';
import styled from "styled-components";

export default class ProductDetails extends Component {
   
  render() {
    const name = this.props.match.params.name;
    const toRender = products.filter((product)=> product.name === name)[0];
    return (
        <>
            <button onClick={()=> this.props.history.replace("/products")}>
                Return to products
            </button>
            <ProductWrapper>
                {
                    toRender ? (<Product product ={toRender}></Product>) :(
                        <p>Product not found</p>
                    )
                }
            </ProductWrapper>
        </>
      
    )
  }
}

const ProductWrapper = styled.div`
    text-align : center;
    display : flex;
`;
