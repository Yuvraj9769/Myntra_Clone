import { createContext, useReducer, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Spinner from "./Spinner";

export const Contextdata = createContext({
  data: [],
  cartdata: [],
  adddata: () => {},
  removedata: () => {},
});

let Changecartdata = (predata, action) => {
  if (action.payload === "addtocart") {
    let newdata = [...predata, action.data];
    return newdata;
  }

  if (action.payload === "delcart") {
    let newdata = predata.filter((e, index) => {
      if (action.ind === index) return;
      else return e;
    });
    return newdata;
  }
};

let Context = () => {
  const data = [
    {
      title: "Puma",
      off: "Pure Cotton Printed T-Shirt",
      price: { ogprice: 584, offer: 1299, dis: "55% " },
      imgpath: "./public/men-1.png",
    },
    {
      title: "H&M",
      off: "Regular Fit Printed T-Shirt",
      price: { ogprice: 454, offer: 699, dis: "35% " },
      imgpath: "./public/men-2.png",
    },
    {
      title: "Levis",
      off: "Printed Pure Cotton T-Shirt",
      price: { ogprice: 539, offer: 1199, dis: "55% " },
      imgpath: "./public/men-3.png",
    },
    {
      title: "U.S. Polo Assn",
      off: "Logo Lounge T-Shirts",
      price: { ogprice: 524, offer: 699, dis: "25% " },
      imgpath: "./public/men-4.png",
    },
    {
      title: "Levis",
      off: "Solid Lounge T-Shirt",
      price: { ogprice: 330, offer: 579, dis: "43% " },
      imgpath: "./public/men-5.png",
    },
    {
      title: "Levis",
      off: "Men Pure Cotton T-Shirt",
      price: { ogprice: 655, offer: 1599, dis: "59% " },
      imgpath: "./public/men-6.png",
    },
    {
      title: "U.S. Polo Assn.",
      off: "Men Athleisure Lounge T-shirt",
      price: { ogprice: 449, offer: 899, dis: "50% " },
      imgpath: "./public/men-7.png",
    },
    {
      title: "Puma",
      off: "Printent Slim Fit T-Shirt",
      price: { ogprice: 524, offer: 1499, dis: "65% " },
      imgpath: "./public/men-8.png",
    },
    {
      title: "Levis",
      off: "Pure Cotton Printed T-Shirt",
      price: { ogprice: 539, offer: 1199, dis: "55% " },
      imgpath: "./public/men-9.png",
    },
    {
      title: "Levis",
      off: "Men Pure Cotton T-Shirt",
      price: { ogprice: 559, offer: 1399, dis: "60% " },
      imgpath: "./public/men-10.png",
    },
    {
      title: "Levis",
      off: "Pure Cotton Printed T-Shirt",
      price: { ogprice: 539, offer: 1199, dis: "55% " },
      imgpath: "./public/men-11.png",
    },
    {
      title: "Levis",
      off: "Pure Cotton Printed T-Shirt",
      price: { ogprice: 539, offer: 1199, dis: "55% " },
      imgpath: "./public/men-12.png",
    },
    {
      title: "WildHorn",
      off: "Men Genuine Leather RFID",
      price: { ogprice: 959, offer: 3999, dis: "76% " },
      imgpath: "./public/men-wallet-1.png",
    },
    {
      title: "Levis",
      off: "Men Tapered Stretchable Jeans",
      price: { ogprice: 1289, offer: 2999, dis: "57% " },
      imgpath: "./public/men-pant-1.png",
    },
    {
      title: "ADIDAS",
      off: "Men Adivat Running Shoes",
      price: { ogprice: 1319, offer: 3299, dis: "60% " },
      imgpath: "./public/men-shoes-1.png",
    },
  ];

  let adddata = (carddata) => {
    let sendtoreducer = {
      payload: "addtocart",
      data: carddata,
    };
    dispatch(sendtoreducer);
  };

  let removedata = (ind) => {
    let sendtoreducer = {
      payload: "delcart",
      ind,
    };
    dispatch(sendtoreducer);
  };

  const [cartdata, dispatch] = useReducer(Changecartdata, []);
  const [spin, changespin] = useState(true);

  setTimeout(() => {
    changespin(false);
  }, 2000);

  return (
    <Contextdata.Provider
      value={{
        data,
        adddata,
        removedata,
        cartdata,
      }}
    >
      {spin ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </Contextdata.Provider>
  );
};

export default Context;
