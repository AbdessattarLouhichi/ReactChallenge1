import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import styled from "styled-components";
import Header from './Components/Header';

const Welcome = React.lazy(()=> import("./pages/Welcome"));
const Products = React.lazy(()=> import("./pages/Products"));
const ProductDetails = React.lazy(()=> import("./pages/ProductDetails"));

function App() {
  const connectedUser = null;
  return (
    <>
      <Header></Header>
      <AppFrame className="App">
        <BrowserRouter basename='/'>
          <Suspense fallback={<p>...Loading page please wait</p>}>
            {connectedUser ?(
               <Switch>
               <Route path='/welcome' render={(props)=><Welcome {...props}/>}></Route>
               <Route path='/login' render={(props)=><Welcome {...props}/>}></Route>
               <Route path='/products' render={(props)=><Products {...props}/>}></Route>
               <Route path='/prodcut/:name' render={(props)=><ProductDetails {...props}/>}></Route>
               <Route exact render={()=>(<p>Default render page! Welcome {connectedUser.name}</p>)}></Route>
             </Switch>
            ):(
              <Switch>
              <Route path='/welcome' render={(props)=><Welcome {...props}/>}></Route>
              <Route path='/login' render={(props)=><Welcome {...props}/>}></Route>
              <Route path='/products' render={(props)=><Products {...props}/>}></Route>
              <Route path='/prodcut/:name' render={(props)=><ProductDetails {...props}/>}></Route>
              <Route exact render={()=>(<p>You are not logged in!</p>)}></Route>
            </Switch>
            )

            }
           
           
          </Suspense>
          
        </BrowserRouter>
        
      </AppFrame>
    </>
    
  );
}

const AppFrame = styled.div`
  text-align : center;
  display : flex;
`;

export default App;
