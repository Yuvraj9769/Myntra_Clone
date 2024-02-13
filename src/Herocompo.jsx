let Herocompo = () => {
  let arr = [
    { title: "Ethnic Wear", off: "50-80% OFF", imgpath: "./public/img1.png" },
    {
      title: "WFH Casual Wear",
      off: "40-80% OFF",
      imgpath: "./public/img2.png",
    },
    { title: "Activewear", off: "30-70% OFF", imgpath: "./public/img3.png" },
    { title: "Activewear", off: "30-70% OFF", imgpath: "./public/img4.png" },
    { title: "Western Wear", off: "40-80% OFF", imgpath: "./public/img5.png" },
    { title: "Sports Wear", off: "30-80% OFF", imgpath: "./public/img6.png" },
    { title: "Loungewear", off: "30-60% OFF", imgpath: "./public/img7.png" },
    { title: "Innerwear", off: "UP TO 70% OFF", imgpath: "./public/img8.png" },
    { title: "Lingerie", off: "UP TO 70% OFF", imgpath: "./public/img9.png" },
    { title: "Watches", off: "UP TO 80% OFF", imgpath: "./public/img10.png" },
    { title: "Grooming", off: "UP TO 60% OFF", imgpath: "./public/img11.png" },
    {
      title: "Beauty & Makeup",
      off: "UP TO 70% OFF",
      imgpath: "./public/img12.png",
    },
    { title: "Kids Wear", off: "50-70% OFF", imgpath: "./public/img13.png" },
    { title: "Footwear", off: "50-70% OFF", imgpath: "./public/img14.png" },
    { title: "Footwear", off: "40-80% OFF", imgpath: "./public/img15.png" },
    {
      title: "Bags,Belts & Wallets",
      off: "40-70% OFF",
      imgpath: "./public/img16.png",
    },
    { title: "Office Wear", off: "40-70% OFF", imgpath: "./public/img17.png" },
    {
      title: "Ethnic Wear",
      off: "UP TO 60% OFF",
      imgpath: "./public/img18.png",
    },
    { title: "Home Decor", off: "40-70% OFF", imgpath: "./public/img19.png" },
    { title: "Handbags", off: "40-80% OFF", imgpath: "./public/img20.png" },
    {
      title: "Headphones & Speakers",
      off: "UP TO 70% OFF",
      imgpath: "./public/img21.png",
    },
    { title: "Jewellery", off: "UP TO 80% OFF", imgpath: "./public/img22.png" },
    {
      title: "Size-inclusive Styles",
      off: "UP TO 60% OFF",
      imgpath: "./public/img23.png",
    },
    {
      title: "Inclusive Styles",
      off: "UP TO 60% OFF",
      imgpath: "./public/img24.png",
    },
    {
      title: "Watches & Wearables",
      off: "UP TO 80% OFF",
      imgpath: "./public/img25.png",
    },
    { title: "Sleepwear", off: "30-70% OFF", imgpath: "./public/img26.png" },
    { title: "Workwear", off: "40-70% OFF", imgpath: "./public/img27.png" },
    { title: "Eyewear", off: "UP TO 80% OFF", imgpath: "./public/img28.png" },
    { title: "Workwear", off: "40-80% OFF", imgpath: "./public/img29.png" },
    {
      title: "Casual Styles",
      off: "40-80% OFF",
      imgpath: "./public/img30.png",
    },
    {
      title: "Bags & Backpacks",
      off: "30-80% OFF",
      imgpath: "./public/img31.png",
    },
    {
      title: "Trolleys & Luggage",
      off: "30-70% OFF",
      imgpath: "./public/img32.png",
    },
    { title: "Flip-flops", off: "30-70% OFF", imgpath: "./public/img33.png" },
  ];

  return (
    <div className="hero-div">
      <div className="shop-by">
        <h1>SHOP BY CATEGORY</h1>
      </div>

      {/* shopping div */}

      <div className="shop-div">
        <div className="shop-main-div">
          {arr.map((e, ind) => (
            <div className="boxes-shop" key={ind}>
              <img src={`${e.imgpath}`} alt="" />
              <p className="p-shop">{e.title}</p>
              <h3 className="h3-shop">{e.off}</h3>
              <p className="p-shop">Shop Now</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Herocompo;
