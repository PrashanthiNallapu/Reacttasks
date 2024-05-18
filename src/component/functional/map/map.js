import React from "react"
const MapItems = () => {
    const cities=["Hyderabad","Secunderabad","Chennai","Bangalore"]
    return(
        <React.Fragment>
            {
                cities.map((value)=>{
                    return(
                        <>
                        <h5>{value}</h5>
                        </>
                    )
                }
            )
            }
        </React.Fragment>
    )
}
export default MapItems