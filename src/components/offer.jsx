
const offerSectionData = [
  {
    title: "Bank Offer",
    description: "Upto Rs 35 off ....",
  },

  {
    title: "Partner Offer",
    description: "No Offer ....",
  },

  {
    title: "HDFC Bank Offer",
    description: "Bank offer upto Rs 10 ....",
  },
  {
    title: "Refferal Offer",
    description: "Referral Offer ....",
  },
];
const OfferComponent = () => {
  return (
    <div
     className="flex"
    >
      {offerSectionData?.map(({ title, description }) => {
        return (
          <div
                className="mr-4 p-4 h-[140px] w-[200px] border border-gray-700 rounded-md"
          >
            <p>{title}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};




// const OfferComponent = () => {
//     return (<div style={{
//      display:'flex',
//     }}>
//         {
//             offerSectionData?.map(({title,description}) => {
//                 return <div style={{
//                     marginRight:4,
//                     padding:4,
//                     height: '100px',
//                     width: '150px',
//                     border: "1px solid gray",
//                     borderRadius:10,
//                 }}>
//                     <p>{title}</p>
//                     <p>{description}</p>
//                 </div>

//             })
//         }

//     </div> );
// }
 
export default OfferComponent;