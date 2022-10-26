import * as Mui from '@mui/material/';
import SearchBar from '../components/SearchBar';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
     <div className='center'>


   
<Mui.Stack spacing={2} >


<h2>
  Fish Watch
</h2>
<SearchBar />
<Link to='/allprofiles'  style={{textDecoration: 'none'}}>
    
<Mui.Button variant="contained">Show all profiles</Mui.Button>
</Link>


</Mui.Stack>

     
  
     

      
      
   
   </div>
  )
}

export default Home