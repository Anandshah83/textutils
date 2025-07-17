import React from 'react'

// function Alert(props) {
//   const capitalize=(word)=>{
//     const lower=word.toLowerCase();
//     return lower.charAt(0).toUpperCase()+lower.slice(1);

//   }
//   return (
//    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//       <strong>{capitalize(props.alert.type)}</strong>:  {props.alert.msg}
//   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>-
  
// </div>
//   )
// }

// export default Alert



function Alert(props) {
  const capitalize = (word) => {
    if (typeof word !== 'string') return ''; // safeguard
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  if (!props.alert) return null; // don't render anything if alert is missing

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show bg-success text-white`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  );
}

export default Alert;

