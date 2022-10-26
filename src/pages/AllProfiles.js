import {useState, useEffect } from "react"
import axios from 'axios'
import FishCard from "../components/FishCard";
import Grid2 from '@mui/material/Unstable_Grid2';
import * as Mui from '@mui/material/';
import {Link} from 'react-router-dom'

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

       

<div className="profilesTop">
<Link to='/'  style={{textDecoration: 'none'}}>
    
<Mui.Button variant="contained">Home</Mui.Button>
</Link>
    <h1>All Profiles</h1>
</div>
       
   

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