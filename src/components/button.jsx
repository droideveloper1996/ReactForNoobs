// var , let ,const

// for (let i = 0; i < 5; i++)
// {
//     console.log(i)
// }


// for (var i = 0; i < cars.length; i++)
// {
//     console.log(cars[i])
// }

// console.log(i)

// Destructure

// Spread Operator ----> Clone/Copy 

//   1234




// function handleClick() {
    
// }


//Arrow Function

// const handleLogin = (username,password) => {
//     console.log('Called Me', {
//         username,password
//     })
// }


// so we can say that calcuilatesum is HOF

const calculateSum = (a, b, callback) => {
    console.log("Called Calculates Sum ",a+b)
    callback()
}

const customPrintFunction = () => {
    console.log("Called Me")
}


calculateSum(10, 5, customPrintFunction);

const cars = ["audi", "bmw", "tata", "jaguar"];

const  newCar=cars.forEach(car => {
    console.log(car)
})
console.log(newCar)


const newCarArray=cars.map(car => {
    return car+" Car"
})

console.log(newCarArray)

// const filteredCar=cars.filter(car => {
//     if (car === "audi") {
//         return true
//     }
// })

const filteredCar2 = cars.filter((car) => car === "audi");


const studentData = [
  {
    name: "James",
    rollNo: 1,
  },

  {
    name: "Adams",
    rollNo: 2,
  },
  {
    name: "Michael",
    rollNo: 3,
  },
  {
    name: "Nick",
    rollNo: 4,
  },
  {
    name: "Andes",
    rollNo: 5,
  },
];

const filteredStudent = studentData.filter(
  (student) => student.name === "Michael"
);

const filteredStudent2 = studentData.filter(({ name }) => name === "Michael");


// HigherOrderFunction HOC

const userInfo = {
  token_type: "Bearer",
  token_expires: "2023-09-28T12:55:36Z",
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTkwMzkzNiwianRpIjoiYjk5NjQzOWQtMjg3NC00ZWE0LWI2OGItYjliYmQ4ODlkN2FmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IntcImFkZF9hbmRfY29tbWl0XCI6IG51bGwsIFwiYWx0X2NvbXBhbnlcIjogbnVsbCwgXCJiYXNpY19xdWVyeV9vYmplY3RcIjogbnVsbCwgXCJjaGVja19wYXNzd29yZFwiOiBudWxsLCBcImNoZWNrX3BsYWludGV4dF9wYXNzd29yZF9hZ2FpbnN0X2hhc2hcIjogbnVsbCwgXCJjb21wYW55XCI6IG51bGwsIFwiY29tcGFueV9pZFwiOiAyLCBcImNvbXBhbnlfdXVpZFwiOiBcIjZiNzU5ZjFlLThkNjgtMTFlZC05NmNjLTAwMTYzZTg5NmE4N1wiLCBcImNyZWF0ZWRfYXRcIjogbnVsbCwgXCJjcmVhdGVkX2J5XCI6IDEsIFwiY3JlYXRlZF91c2VyXCI6IFtdLCBcImN1cnJlbnRfc2Vzc2lvblwiOiBudWxsLCBcImRlbGV0ZV9pbl9kYlwiOiBudWxsLCBcImRlbGV0ZWRfYXRcIjogbnVsbCwgXCJkaWN0X2Z1bGxcIjogbnVsbCwgXCJkaWN0X2ludGVybmFsX2RhdGFcIjogbnVsbCwgXCJkaWN0X2xpdGVcIjogbnVsbCwgXCJkaWN0X25vdGVzX2xpdGVcIjogbnVsbCwgXCJkaWN0X3Bhc3N3b3JkX3Jlc2V0XCI6IG51bGwsIFwiZGljdF9zaGFsbG93XCI6IG51bGwsIFwiZXhlY3V0ZV9yYXdfc2VsZWN0X2FsbFwiOiBudWxsLCBcImV4ZWN1dGVfcmF3X3NlbGVjdF9maXJzdFwiOiBudWxsLCBcImZpbmRfYnlfaWRcIjogbnVsbCwgXCJmaW5kX2J5X2lkX2Zvcl9jdXJyZW50X3VzZXJfbG9hZFwiOiBudWxsLCBcImZpbmRfYnlfaWRfZm9yX2N1cnJlbnRfdXNlcl9zZXNzaW9uX3ZhbGlkXCI6IG51bGwsIFwiZmluZF9ieV9wZXJzb25faWRcIjogbnVsbCwgXCJmaW5kX2J5X3NsdWdcIjogbnVsbCwgXCJmaW5kX2J5X3VzZXJuYW1lXCI6IG51bGwsIFwiZmluZF9ieV91dWlkXCI6IG51bGwsIFwiZmluZF9jb21wYW55X29ubHlcIjogbnVsbCwgXCJmaW5kX3ByaW1hcnlfdXNlclwiOiBudWxsLCBcImZpbmRfdW5hcmNoaXZlZFwiOiBudWxsLCBcImZpbmRfdW5kZWxldGVkXCI6IG51bGwsIFwiaGFyZF9kZWxldGVfaW5fZGJcIjogbnVsbCwgXCJpZFwiOiAzLCBcInBhc3N3b3JkXCI6IFwiJDJiJDEyJG5EL1N1S1ZDUzlTeTdGS213UWtXN2U5Z3dBd2JvRmpWdFBscFkySWRxRnF5SUE3M0c0TTUyXCIsIFwicGVyc29uXCI6IG51bGwsIFwicGVyc29uX2lkXCI6IDMsIFwicGxhaW50ZXh0X3Bhc3N3ZFwiOiBmYWxzZSwgXCJwcmV2aW91c19wYXNzd29yZF9oYXNoXCI6IG51bGwsIFwicXVlcnlcIjogbnVsbCwgXCJxdWVyeV9jbGFzc1wiOiBudWxsLCBcInJlZ2lzdHJ5XCI6IG51bGwsIFwicm9sbGJhY2tcIjogbnVsbCwgXCJzYXZlX3RvX2RiXCI6IG51bGwsIFwic2Vzc2lvbl91dWlkXCI6IFwiZjFmMjFiMjUtNzVmOS00ZTAwLTlkMTgtMjczNmIyNWQ5YTQ1XCIsIFwic3RhdHVzXCI6IG51bGwsIFwidHJhbnNmb3JtX2pzb25cIjogbnVsbCwgXCJ0cmFuc2Zvcm1fb3B0aW9uc19saXN0XCI6IG51bGwsIFwidW5kZWxldGVfaW5fZGJcIjogbnVsbCwgXCJ1cGRhdGVfaW5fZGJcIjogbnVsbCwgXCJ1cGRhdGVkX2F0XCI6IG51bGwsIFwidXBkYXRlZF9ieVwiOiAyLCBcInVwZGF0ZWRfdXNlclwiOiBbXSwgXCJ1c2VyX3JvbGVcIjogbnVsbCwgXCJ1c2VyX3JvbGVfaWRcIjogNCwgXCJ1c2VyX3RhZ3NcIjogbnVsbCwgXCJ1c2VyX3R5cGVcIjogbnVsbCwgXCJ1c2VyX3R5cGVfaWRcIjogMSwgXCJ1c2VybmFtZVwiOiBcInVzZXIyQGV4YW1wbGUuY29tXCIsIFwidXVpZFwiOiBcImQ5MmM2YjU5LTExMmEtNDViOC05NThjLTc0ZGMzZmI2NjcxZVwifSIsIm5iZiI6MTY5NTkwMzkzNiwiZXhwIjoxNjk1OTA1NzM2fQ.FBlt_15obVRKMAcKfsJsSylreF-E1-Gj_wTIQv-g0vU",
  user_uuid: "d92c6b59-112a-45b8-958c-74dc3fb6671e",
  username: "user2@example.com",
  company_name: "The PPL Events",
  company_uuid: "6b759f1e-8d68-11ed-96cc-00163e896a87",
  person_uuid: "1d670f48-8ae1-11ed-8643-00163e896a87",
  company_status: "active",
};



const fruits = ['apple', 'mango', 'guava']

const fruits2 = ["litchi","orange",...fruits];

const userInfo2 = { ...userInfo }
    
    
// 56788
const studentInformation = {
  personalInfo: {
    fName: "Abc",
    lastName: "Xyz",
    profileURL: "https://abc.com/random/32",
  },

  addressDetail: {
    addressLine1: "112-0",
    addressLine2: "Us East, California",
  },
  marks: {
    phyics: [
      {
        marks: 123,
      },
      { marks: 123 },
      { marks: 234 },
      { marks: 12 },
    ],
    chemistry: [{}],
    maths: [{}],
  },
};

const { personalInfo, addressDetail } = studentInformation;
const { fname, lastName } = personalInfo;

const { username, person_uuid, company_status, access_token } = userInfo;

const physics = [
  {
    marks: 123,
  },
  { marks: 2 },
  { marks: 5 },
  { marks: 10 },
];

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: 140,
        height: 40,
        borderRadius: 10,
        border: 0,
        backgroundColor: "orange",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
