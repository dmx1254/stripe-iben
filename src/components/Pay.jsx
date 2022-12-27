// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import StripeCheckout from "react-stripe-checkout";

// import axios from "axios"

// import logoPayment from "../assets/ibendouma-logo.png";

// const Pay = () => {
//   const [stripeToken, setStripeToken] = useState(null);

//   console.log(stripeToken);

//   const KEY =
//     "pk_test_51MExE2FnID2qcdOlP4CZxnEdOtO1g8NSPIqYUX3RaYE3watQW9JLUxWFpyNoIlWyzBK24SocTOxPyTOtgVsJB4TD00mrkJCfnI";
//   const { language } = useSelector((state) => state.language);

//   const onToken = (token) => {
//     setStripeToken(token);
//   };

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   }, [stripeToken]);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <StripeCheckout
//         name="Ibendouma"
//         image={logoPayment}
//         billingAddress
//         shippingAddress
//         description="Votre produit dofus vous a été livré avec succéss"
//         amount={2000}
//         token={onToken}
//         stripeKey={KEY}
//         currency={}
//       >
//         <button
//           style={{
//             border: "none",
//             width: "120px",
//             borderRadius: "5px",
//             padding: "20px",
//             fontWeight: 600,
//             cursor: "pointer",
//             background: "rgba(0, 0, 0, 0.9)",
//             color: "#ffffff",
//           }}
//         >
//           {language === "francais" && "Payer"}
//           {language === "anglais" && "Pay"}
//           {language === "espagnol" && "paga"}
//         </button>
//       </StripeCheckout>
//     </div>
//   );
// };

// export default Pay;
