import React from 'react'
import {BrowserRouter,  Routes ,Route} from 'react-router-dom'
import HomeScreen from '../screens/home-screen'
import AboutScreen from '../screens/about-screen'
import SettingsScreen from '../screens/settings-screen'
import BlogScreen from '../screens/blog-screen'




function NavigationStack() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route  path='/' Component={HomeScreen} />
        <Route  path='/about' Component={AboutScreen} />
        <Route  path='/settings' Component={SettingsScreen} />
        <Route  path='/blog' Component={BlogScreen} />
       
      
       

    </Routes>
    </BrowserRouter>
    
    
    
    </>
    
  )
}

export default NavigationStack