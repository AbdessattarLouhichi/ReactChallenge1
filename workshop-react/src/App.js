
import './App.css';
import products from './products.json';
import Product from "./Components/Product";
import styled from "styled-components";


function App() {

  return (
    <AppFrame className="App">
      {
        products.map((item, index)=>(
          <Product key={index} product={item}></Product>
        
        ))
          
      }
    </AppFrame>
  );
}

const AppFrame = styled.div`
  text-align : center;
  display : flex;
`;

export default App;
