 import React from 'react'
import Product from './components/Product'
import PaymentSuccess from './components/PaymentSuccess'
 import data from './components/data'

 import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
 const App = () => {
   return (
    
     <Router>

      <Routes>

        {/* Home Page */}
        <Route
          path='/'
          element={<Product data={data} />}
        />

        {/* Payment Success Page */}
        <Route
          path='/paymentSuccess'
          element={<PaymentSuccess />}
        />

      </Routes>

    </Router>

   )
 }
 
 export default App