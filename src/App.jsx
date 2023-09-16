import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import './App.css'


function App() {

  return (    
    <>
    <BrowserRouter>
    <div><Navbar/></div>
       <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/services' element={<Services />}></Route>
       <Route path='/products' element={<Products />}></Route>
       <Route path='/sign-up' element={<SignUp />}></Route>
       </Routes>
     </BrowserRouter>
     </>
  )
}  
export default App

    
/*
Original code uses Swich. I've replaced Switch for Routes because the new version of react-router-dom doesn't support Switch.
  
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

*/

