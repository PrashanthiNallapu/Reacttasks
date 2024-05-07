const GreetingComponent=(props)=>{
    console.log(props)
    return(
        <>
        {props.children}
        </>
    )
}
export default GreetingComponent