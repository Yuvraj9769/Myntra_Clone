import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Contextdata } from "./Context";

let Header = () => {
  const navigate = useNavigate();
  const { cartdata } = useContext(Contextdata);

  let changetab = (data) => {
    navigate(`/${data}`);
  };

  let gotocart = () => {
    navigate("/Cart");
  };

  let letgeotohome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="h-box-1">
        <div className="header-1" onClick={letgeotohome}>
          <img
            src="https://i.pinimg.com/originals/10/8f/fd/108ffd534d2076aa59babdb3b925438d.png"
            alt=""
            className="img-head"
          />
        </div>
        <h5 className="head-h5 pink" onClick={() => changetab("Men")}>
          MEN
        </h5>
        <h5 className="head-h5 pink">WOMEN</h5>
        <h5 className="head-h5 red">KIDS</h5>
        <h5 className="head-h5 yellow" style={{ width: "115px" }}>
          HOME & LIVING
        </h5>
        <h5 className="head-h5 skyblue">BEAUTY</h5>
        <h5 className="head-h5 std pink">
          STUDIO
          <span id="new">NEW</span>
        </h5>
      </div>
      <div className="box-2">
        <div className="sub-div-1">
          <h4 className="h4-box-2">
            <IoIosSearch />
          </h4>
          <input
            type="text"
            id="inp"
            placeholder="Search for products,brands and more"
          />
        </div>
        <div className="sub-div-1-2">
          <h4 className="h4-box-2-1">
            <FaRegUser />
            <span>Profile</span>
          </h4>
          <h4 className="h4-box-2-1">
            <CiHeart />
            <span>Wishlist</span>
          </h4>
          <h4 className="h4-box-2-1" onClick={gotocart}>
            <FaShoppingBag />
            <span>Bag</span>
            <span className="addeditems">{cartdata.length}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Header;
