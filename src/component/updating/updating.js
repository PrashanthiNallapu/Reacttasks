import { Component } from "react"


class UpdatingPhase extends Component{
    state={
        count:0
    }
    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h1>Updating phase</h1>
            <h3>{this.state.count}</h3>
            <button onClick={this.incrementAction}>Click to increment</button>
            </>
        )
    }

}
export default UpdatingPhase