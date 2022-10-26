//import { useState, useEffect } from 'react';
//import axios from 'axios'
import './App.css';
// import * as Mui from '@mui/material/';
// import SearchBar from './components/SearchBar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AllProfiles from './pages/AllProfiles';
function App() {
  

// useEffect(() => {
//   axios.get('https://www.fishwatch.gov/api/species')
//     .then(response => setData(response.data));
// }, []);





  return (
 <Routes>

<Route path='/' element={<Home/>}>

</Route>

<Route path='/allprofiles' element={<AllProfiles/>}>

</Route>


</Routes>

    
//    <div className='center'>


   
// <Mui.Stack spacing={2} >


// <h2>
//   Fish Watch
// </h2>
// <SearchBar />
// <Mui.Button variant="contained">Show all profiles</Mui.Button>

// </Mui.Stack>

     
  
     

      
      
   
//    </div>
 
  
  );
}

export default App;
