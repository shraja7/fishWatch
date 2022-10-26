import {useState, useEffect } from "react"
import axios from 'axios'
import FishCard from "../components/FishCard";


const AllProfiles = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
  axios.get('https://www.fishwatch.gov/api/species')
    .then(response => setData(response.data));
}, []);

//get all species name
const speciesName = data.map((fish) => <p>{fish['Species Name']}</p>)
console.log('Species Names: ',speciesName)





  return (
    <div>
        <h1>All Profiles</h1>
        {
            data && data.map((fish) =>
            
            
            <FishCard speciesName={fish['Species Name']} />
            
            )
        }
      
       
        {/* <p>{
        data[0]['Species Name']
        
        }</p> 
         <p>{
        data[1]['Species Name']
        
        }</p> 
         <p>{
        data[2]['Species Name']
        
        }</p>  */}
      
        {/* <FishCard /> */}
    </div>
  )
}

export default AllProfiles