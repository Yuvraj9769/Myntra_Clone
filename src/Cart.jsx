import { useContext } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Contextdata } from "./Context";

let Cart = () => {
  const { removedata, cartdata } = useContext(Contextdata);

  let date = new Date();
  let today = date.getDate();
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  const ConvinienceFee = 99;
  let summrp = 0;
  let sumdiscount = 0;
  let totalamount = 0;
  let checkconviniencefee = ConvinienceFee * cartdata.length;

  cartdata.forEach((e) => {
    summrp += e.price.ogprice;
    sumdiscount += e.price.offer;
  });

  if (sumdiscount > summrp) {
    totalamount = sumdiscount - summrp + checkconviniencefee;
  } else {
    totalamount = summrp - sumdiscount + checkconviniencefee;
  }

  let delpost = (ind) => {
    removedata(ind);
  };
  return (
    <div className="Container-cart">
      {cartdata.length === 0 ? (
        <h1>Cart is empty Plase Add items!!!</h1>
      ) : (
        <div className="main-cart">
          <div className="cartitem">
            {cartdata.map((e, ind) => (
              <div className="shop-main-div2" key={ind}>
                <div className="boxes-shop3">
                  <img
                    src={`${e.imgpath}`}
                    style={{ height: "95%", width: "200px" }}
                    alt=""
                  />
                  <div className="cartinfo">
                    <p className="p-shop2">{e.title}</p>
                    <h3 className="h3-shop2">{e.off}</h3>
                    <div className="pshop2 price-div">
                      <div className="main-price-div2">
                        <span className="ogprice">Rs. {e.price.ogprice}</span>
                        <span className="offer-price">Rs. {e.price.offer}</span>
                        <span className="discount">({e.price.dis}off)</span>
                      </div>
                    </div>
                    <p style={{ color: "black", fontSize: "13px" }}>
                      <span style={{ fontWeight: "bold" }}>14 Days</span> Return
                      Available
                    </p>
                    <p style={{ color: "black", fontSize: "13px" }}>
                      Deliver by{" "}
                      <span className="deliverdate">
                        {today} {month} {year}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="deletecart" onClick={() => delpost(ind)}>
                  <MdDelete />
                </div>
              </div>
            ))}
          </div>

          {/* Bill generator */}

          <div className="cart-price">
            <div className="cart-price-div">
              <div className="cart-box-1">
                <h4>PRICE DETAILS ({cartdata.length})</h4>
                <div className="subbox-cart">
                  <h4>Total MRP</h4>
                  <h4 className="rsdiv">
                    <FaRupeeSign />
                    {summrp}
                  </h4>
                </div>
                <div className="subbox-cart">
                  <h4>Discount on MRP</h4>
                  <h4 className="rsdiv discountrs">
                    -<FaRupeeSign />
                    {sumdiscount}
                  </h4>
                </div>
                <div className="subbox-cart">
                  <h4>Convenience Fee</h4>
                  <h4 className="rsdiv">
                    <FaRupeeSign />
                    {checkconviniencefee}
                  </h4>
                </div>
              </div>
              <div className="cart-box-2">
                <div className="subbox-cart">
                  <h4>Total Amount</h4>
                  <h4 className="rsdiv">
                    <FaRupeeSign /> {totalamount}
                  </h4>
                </div>
                <button className="cart-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
