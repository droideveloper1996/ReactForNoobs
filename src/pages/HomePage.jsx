import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate=useNavigate()

  return (
    <div className="w-full h-screen flex bg-red-400 text-white ">
      <div className="flex justify-between w-full px-4 py-4">
        <p className="font-bold text-black">Amazon Clone</p>
              <MdShoppingCart className="cursor-pointer" onClick={() => {
                  navigate('cart')
        }}/>
      </div>
    </div>
  );
};

export default HomePage;
