// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import ButtonComponent from "./component/functional/button/button.js";
import FormComponent from "./component/functional/button/forms/forms.js";
import ListComponent from "./component/functional/button/list/list.js";
import CardComponent from "./component/functional/button/card/card.js";
import MapItems from "./component/functional/map/map.js";
import Imagecomponent from "./component/class/image.js";
 import NavBar from "./component/functional/NavBar/NavBar.js";
import GreetingComponent from "./component/functional/greeting/greeting.js";


import TodoComponent from "./component/class/todo/todo.js";
import CarouselComponent from "./component/class/carousel/carousel.js";

import Product from "./component/functional/button/card/fakestore.js";
import Productt from "./component/class/lifecycle/mounting/mounting.js";
import Spin from "./component/spinner/spinner.js";
import Prod from "./component/functional/button/card/card.js";
import Mounting from "./component/class/lifecycle/mounting/mounting.js";


const App =() =>{
  return(
    <div>
       {/* <h1>Hello</h1>
      <ButtonComponent buttontext={"login"} bgcolor={"green"} buttonproperties={{
        height:100,
        width:100
      }}/>
      <ButtonComponent buttontext={"signin"} bgcolor={"yellow"} buttonproperties={{
        height:100,
        width:100
      }}/>
      <ButtonComponent buttontext={"signup"} bgcolor={"orange"} buttonproperties={{
        height:100,
        width:100
      }}/>
      <ButtonComponent buttontext={"Submit"} bgcolor={"purple"} buttonproperties={{
        height:100,
        width:100
      }}/> 
       <FormComponent/>
       <ListComponent/>  
       
      <MapItems/> 
        
      <NavBar/>
      <Imagecomponent/>
      <GreetingComponent>
        <Imagecomponent/>
        <>
        <h4>Hello Everyone</h4>
        <h4>I am Prashanthi Nallapu</h4>
        </>
      </GreetingComponent> 
      
      
      <TodoComponent/> 
       <CarouselComponent/>  */}
       
      {/* <Product/> */}
   
   
    
      {/* <Mounting/>  */}
      {/* <Spin/> */}
      <Mounting/>
      <CardComponent/>
     
     
      

    </div>
  )
}
export default App
