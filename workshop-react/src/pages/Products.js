
import React, { Component } from 'react';
import products from '../products.json';
import Product from '../Components/Product';
import styled from "styled-components";

export default class Products extends Component {
  render() {
    return (
        <ProductsWrapper className="App">
        {
          products.map((item, index)=>(
            <Product key={index} product={item}></Product>
          
          ))
            
        }
      </ProductsWrapper>
    );
  }
}
const ProductsWrapper = styled.div`
    text-align : center;
    display : flex;

`;



