import axios from "axios";
import Button from "./components/button";
import { load } from "@cashfreepayments/cashfree-js";
import { useEffect, useState } from "react";
import OfferComponent from "./components/offer";
const cashfree = await load({
  mode: "sandbox", //or production
});

const products = [
  {
    productId: 1,
    productName: "boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)",
    productPrice: 100,
    url: "https://www.boat.com",
    label: "Visit the boAt Store",
    rating: "⭐⭐⭐⭐",
    productDesc: "Lorem ipsum dolar",
    productImage:
      "https://www.boat-lifestyle.com/cdn/shop/products/1neon_8c6e74ca-ba84-4c0e-8e30-dc907d32107f_288x.png?v=1662633487",

    showAmazonChoice: true,
  },
  // {
  //   productId: 2,
  //   productPrice: 100,

  //   productName:
  //     "boAt Rockerz 255 Pro+ Bluetooth in Ear Earphones with Upto 60 Hours Playback, ASAP Charge, IPX7, Dual Pairing and Bluetooth v5.0(Active Black)",
  //   url: "https://www.boat.com",
  //   label: "Visit the boAt Store",
  //   rating: "⭐⭐⭐",
  //   productDesc: "Lorem ipsum dolar",
  //   productImage: "https://i.gadgets360cdn.com/products/large/102Black-720x-800x747-1612019447.jpg?downsize=*:360"
  // },
  // {
  //   productId: 3,
  //   productPrice: 100,
  //   productName: "Apple AirPods (2nd Generation) Case",
  //   url: "https://www.apple.com",
  //   label: "Visit the Apple Store",
  //   rating: "⭐⭐⭐",
  //   productDesc: "Lorem ipsum dolar",
  //   productImage:
  //     "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",

  //   showAmazonChoice: true,
  // },
];

// Hooks

// useState() --->
// useRef()   -->
// useEffect()  --> Component Lifecycle

function App() {
  return (
    <div className="relative  w-full h-screen">
      {/* {products.map((product) => {
        return (
          <ProductDetailComponent
            productName={product.productName}
            productPrice={product.productPrice}
            productDesc={product.productDesc}
            productImage={product.productImage}
          />
        );
      })} */}
      <TestEffect/>
    </div>
  );
}

// StateLessComponent/FunctionalComponent

const FlexDemo = () => {
  return (
    <div className="flex justify-center  flex-col w-[500px] h-[500px] bg-red-600">
      <div className="w-[100px] h-[100px] bg-yellow-500 "></div>
      <div className="w-[100px] h-[100px] bg-blue-500"></div>
      <div className="w-[100px] h-[100px] bg-green-500"></div>
      <div className="w-[100px] h-[100px] bg-green-100"></div>
    </div>
  );
};

const RelativeAbsoluteDemo = () => {
  return (
    <div className=" w-[500px] h-[500px] bg-red-600 mt-10">
      <div className="absolute w-[100px] h-[100px] bg-yellow-500 "></div>
    </div>
  );
};

const ProductDetailComponent = ({
  productDesc,
  productPrice,
  productName,
  productImage,
}) => {


  useEffect(() => {
    console.log("Component Mounted");
  }, []);


  return (
    <div className="flex  px-10 my-10">
      <div>
        <img src={productImage} className="h-[250px] rounded-lg" />
      </div>
      <div className="flex flex-col mx-10">
        <p className="text-2xl font-bold">{productName}</p>
        <p className="text-lg">Rs.{productPrice}</p>
        <p className="">{productDesc}</p>

        <div className="flex mt-10">
          <button className="w-[200px] px-2 py-2 bg-yellow-400 rounded-lg">
            Buy Now
          </button>
          <button className="w-[200px] px-2 py-2 bg-indigo-400 rounded-lg mx-4">
            Add to Cart
          </button>
        </div>
        {/* <a href={product.url}>{product?.label}</a>
        <p>{product.rating}</p> */}
      </div>
    </div>
  );
};



const TestEffect = () => {



  const [value, setValue] = useState(0)


  useEffect(() => {
    console.log("Mai to chalunga hi chahe jo ho jae");
  });
  

   useEffect(() => {
     console.log("Bhai mai to ek bar chalunga");
   }, []);
  
  
   useEffect(() => {
     console.log("mai chalunga jab value me cvhange hoga");
   }, [value]);
  
  

  const handleClick = () => {
    setValue(value+1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
