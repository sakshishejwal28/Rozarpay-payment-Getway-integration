import React from 'react'
import "../styles/paymentSuccess.css"
import { useLocation } from "react-router-dom"; //react cha hook aahe jo url madhe mahiti bhetanyasasthi use hoto

const PaymentSuccess = () => {
  const query = new URLSearchParams(
    useLocation().search
  );
  const reference = query.get("reference");


  return (
   <div className='success-container'>
      <div className='success-card'>
        <h1 className='success-title'>Payment Successful</h1>
        <p className='success-message '>Successful ! Thank for your payment</p>
        {
            reference && <p className='success-reference'><strong>Reference Id: {reference}</strong></p>
        }
      </div>
    </div>
  )
}

export default PaymentSuccess