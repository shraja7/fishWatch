import {useState, useEffect } from "react"
import axios from 'axios'
import FishCard from "../components/FishCard";
import Grid2 from '@mui/material/Unstable_Grid2';

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
    <div >
       
       <h1 style={{
              textAlign: 'center',
       }}>All Profiles</h1>

       
   

<Grid2 container spacing ={3} className="profilePage" >
      
        {
            data && data.map((fish) =>
            
            <Grid2 justifyContent="center" alignItems="center" item>

           
            <FishCard 
            speciesName={fish['Species Name']}
            speciesPhoto ={fish['Species Illustration Photo'].src}
            scientificName={fish['Scientific Name']}
            />
             </Grid2>
            )
        }
      </Grid2>
       
        
    </div>
  )
}

export default AllProfiles