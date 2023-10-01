import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

   const navigate= useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState("Guest!!")

    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    
    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    
//   const handleLogin = () => {
//       setIsLoggedIn(true);
//       setUserName("John")
//     console.log("Login Called");
//   };
    
const handleLogout = () => {
  setIsLoggedIn(false);
  setUserName("Hey Guest");
  console.log("Logout Called");
};
    
    const getEmailValue = (e) => {

        setHasError(false)
        // console.log("Email Value is", e.target.value)
        setEmail(e.target.value)
    }

     const getPasswordValue = (e) => {
         //    console.log("Password Value is", e.target.value);
        setHasError(false);
         
       setPassword(e.target.value);
     };
    
    function ValidateEmail(mail) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          mail
        )
      ) {
        return true;
      }
      return false;
    }

    
    const handleLogin = () => {

        if (email === null || email === undefined || email === "") { 
            setHasError(true)
            setErrorMsg("Email is empty or is null")
            return 
        }
        if (password === null || password === undefined || password === "") {
            setErrorMsg("Password is empty or is null");
            setHasError(true);
            
           return;
        }
        if (!ValidateEmail(email)) { 
            setErrorMsg("Email is incorrect!!");
            setHasError(true)
        }
         navigate('/')
        
        console.log("Login Called",{email,password,isEmailValid:ValidateEmail(email)})
    }

  return (
    <div className="w-full h-screen flex justify-center">
      {/* <p>Hey!!, {username}</p> */}
      {/* {isLoggedIn === false && ( 
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-4"
        >
          Login 
        </button>
      )}

      {isLoggedIn === true && (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-4"
        >
          Logout 
        </button>
      )} */}
      {/* 
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-4"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-4"
        >
          Login
        </button>
      )} */}

      <div className="h-[300px] w-[250px] bg-gray-50 px-4 py-4 self-center border-1 rounded-lg">
        <p className="mx-4 my-4 text-lg font-semibold text-gray-900">
          Login User
        </p>
        <div className="flex flex-col px-4">
          <input
            onChange={getEmailValue}
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="px-4 py-2 border-1 outline-blue-400"
          />
          <input
            onChange={getPasswordValue}
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="px-4 py-2 border-1 outline-blue-400 mt-4"
          />
          <button
            onClick={handleLogin}
            className="mt-10 bg-indigo-500 rounded-lg text-sm py-2 text-white"
          >
            Login
          </button>
        </div>
     {  hasError && <div className="flex justify-center">
                  <p className="flex self-center text-xs text-red-500 mt-4">{errorMsg }</p>
        </div>}
      </div>
    </div>
  );
};

export default LoginForm;
