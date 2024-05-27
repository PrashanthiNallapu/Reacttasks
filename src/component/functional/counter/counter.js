import {useState} from "react"

const Counter =()=>{
    const initialvalue=1
    const [count,setCount]=useState(initialvalue)
    const stateHandler=(action)=>{
        switch(action){
            case "INCREMENT":
                setCount(count+1)
                break
                case "DECREMENT":
                    setCount(count-1)
                    break
                    case "RESET":
                        setCount(0)
                        break
                        default:
                            break

        }
    }
    return(
        <>
        <h3>counter example in functional based component</h3>
        <h3>{count}</h3>
        <button onClick={()=>stateHandler("INCREMENT")}>Increment counter</button>
        <button onClick={()=>stateHandler("DECREMENT")}>Decrement counter</button>
        <button onClick={()=>stateHandler("RESET")}>Reset counter</button>
        
        </>
    )
}
export default Counter