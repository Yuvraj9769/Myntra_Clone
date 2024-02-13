import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contextdata } from "./Context";
import { MdCancel } from "react-icons/md";

let Men = () => {
  const navigate = useNavigate();

  const { data, adddata } = useContext(Contextdata);
  const [checkvisible, changevisible] = useState(false);

  let gotocartfromcheck = () => {
    navigate("/Cart");
  };

  let senddata = (e) => {
    adddata(e);
    changevisible(true);
  };

  return (
    <div className="hero-div2">
      <div className="shop-by">
        <h1>SHOP BY CATEGORY</h1>
      </div>

      {/* shopping div */}

      <div className="shop-div2">
        <div className="shop-main-div">
          {data.map((e, ind) => (
            <div className="boxes-shop2" key={ind}>
              <img
                src={`${e.imgpath}`}
                style={{ height: "225px", width: "100%" }}
                alt=""
              />
              <p className="p-shop2">{e.title}</p>
              <h3 className="h3-shop2">{e.off}</h3>
              <div className="pshop2 price-div">
                <div className="main-price-div">
                  <span className="ogprice">Rs. {e.price.ogprice}</span>
                  <span className="offer-price">Rs. {e.price.offer}</span>
                  <span className="discount">({e.price.dis}off)</span>
                </div>
              </div>
              <button className="btn-men" onClick={() => senddata(e)}>
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
      {checkvisible && (
        <div className="cartmsg">
          <p className="carttxtmsg">Item added successfully</p>
          <div className="bnts-cartmsg">
            <button className="btnmsg-1" onClick={gotocartfromcheck}>
              Check
            </button>
            <button className="btnmsg-2" onClick={() => changevisible(false)}>
              <MdCancel />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Men;
