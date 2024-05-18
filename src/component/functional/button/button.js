import React from "react";

// const ButtonComponent = () => {
//     const buttonStyle = {
//         color: "black",
//         backgroundColor: "green"
//     };

//     return (
//         <div>
//             <button style={buttonStyle}>Click here</button>
//         </div>
//     );
// }

// export default ButtonComponent;
const ButtonComponent=(props)=>{
    console.log(props,"props")
    const {buttontext,bgcolor,buttonproperties:{width,height}}=props
    return(
        <>
        <button style={{
            backgroundColor:bgcolor,
            width:width,
            height:height
        }}>{buttontext}</button>
        </>
    )

}
export default ButtonComponent

