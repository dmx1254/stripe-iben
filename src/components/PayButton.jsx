import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = () => {
  const handleCheckout = () => {};

  return (
    <>
      <button onClick={handleCheckout}>Payer</button>
    </>
  );
};

export default PayButton;
